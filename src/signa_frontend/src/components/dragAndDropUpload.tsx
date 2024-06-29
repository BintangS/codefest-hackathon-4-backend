import { useState } from 'react';
import { signa_backend } from '../../../declarations/signa_backend';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../components/contexts/UseAuthContext';
import { Principal } from "@dfinity/principal";

const DragAndDropUpload = () => {
    const [file, setFile] = useState<Uint8Array | null>(null);
    const [internetIdentityAddress, setInternetIdentityAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const { profile } = useAuthContext();
    const navigate = useNavigate()

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

        if (profile?.id && internetIdentityAddress !== '') {
            await signa_backend.createDocument(profile?.id, file || [], Principal.fromText(internetIdentityAddress));
            alert("Document send!");
            navigate('/dashboard');
        } else if (profile?.id && email !== '') {
            await signa_backend.createDocumentUsingEmail(profile?.id, file || [], email);
            alert("Document send!");
            navigate('/dashboard');
        } else {
            alert("You are not authenticated, please login!");
        }
    }

    const handleInternetIdentityAddressInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInternetIdentityAddress(e.target.value);
    }

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(e.target.value)) {
          setIsEmailValid(true);
          setEmail(e.target.value);
        } else {
          setIsEmailValid(false);
        }
    }
    
    return (
        <form onSubmit={ (e) => { e.preventDefault() } }>
            <input type="file" accept=".pdf" onChange={ handleSelectedFile } />
            <input type="text" placeholder="internet identity address" onChange={ handleInternetIdentityAddressInput }></input>
            <input type="text" placeholder="email" onChange={ handleEmailInput }></input>
            {!isEmailValid && <div style={{ color: 'red' }}>Please enter a valid email.</div>}
            <button onClick={ handleUpload }>Upload</button>
        </form>
    )
}

export default DragAndDropUpload;