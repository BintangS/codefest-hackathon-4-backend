import './App.css'
import UploadFileModule from './modules/UploadFile'
import PreviewPDF from './components/previewPdf'

function App() {

  return (
    <>
      <h1>
        Signa!
      </h1>
      <p>
        Trusted, Decentralized, and Easy to use document signing on the Blockchain. <br />
      </p>
      <UploadFileModule />
      <PreviewPDF />
    </>
  )
}

export default App
