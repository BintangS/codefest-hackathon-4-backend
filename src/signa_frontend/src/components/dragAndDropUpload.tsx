import { useState } from 'react';
import { signa_backend } from '../../../declarations/signa_backend';

const DragAndDropUpload = () => {
    const [file, setFile] = useState<Uint8Array | null>(null);

    const handleSelectedFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            const reader = new FileReader();

            reader.onload = (loadEvent) => {
                const arrayBuffer = loadEvent.target?.result;
                if (arrayBuffer) {
                    const uint8Array = new Uint8Array(arrayBuffer as ArrayBuffer);
                    setFile(uint8Array); // Make sure to adjust your state or logic to handle Uint8Array
                }
            };

            reader.readAsArrayBuffer(files[0]);
        }
    }

    const handleUpload = async () => {
        console.log("Upload button clicked");
        // todo: call load component preview pdf using the file choosen by the user
        const users = await signa_backend.getAllUser();

        console.log("Users: ", users);
        console.log("file:", file);

        await signa_backend.createDocument(users[0].id, file || [], users[1].id);
    }
    
    return (
        <form onSubmit={ (e) => { e.preventDefault() } }>
            <input type="file" accept=".pdf" onChange={ handleSelectedFile } />
            <button onClick={ handleUpload }>Upload</button>
        </form>
    )
}

export default DragAndDropUpload;