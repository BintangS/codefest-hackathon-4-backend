const DragAndDropUpload = () => {
    const handleUpload = () => {
        console.log("Upload button clicked");
        // todo: preview pdf file using 'react-pdf' lib
    }
    
    return (
        <form onSubmit={ handleUpload }>
            <input type="file" accept=".pdf" />
            <button>Upload</button>
        </form>
    )
}

export default DragAndDropUpload;