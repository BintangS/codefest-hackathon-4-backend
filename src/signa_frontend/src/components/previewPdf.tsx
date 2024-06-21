const DragAndDropUpload = () => {
    const handleUploadButton = () => {
        console.log("Upload button clicked");
    }
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <input type="file" />
            <button onClick={ handleUploadButton }>Upload</button>
        </form>
    )
}

export default DragAndDropUpload;