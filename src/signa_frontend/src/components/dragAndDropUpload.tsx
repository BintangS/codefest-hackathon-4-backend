const DragAndDropUpload = () => {
    const handleUpload = () => {
        console.log("Upload button clicked");
        // todo: call load component preview pdf using the file choosen by the user
    }
    
    return (
        <form onSubmit={ handleUpload }>
            <input type="file" accept=".pdf" />
            <button>Upload</button>
        </form>
    )
}

export default DragAndDropUpload;