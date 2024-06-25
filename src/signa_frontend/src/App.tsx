import './App.css'
import UploadFileModule from './modules/UploadFile'
import PreviewPDF from './components/previewPdf'

function App() {

  return (
    <>
      <h1 className="text-9xl font-bold underline">
        Signa!
      </h1>
      <p className="m-default">
        Trusted, Decentralized, and Easy to use document signing on the Blockchain. <br />
      </p>
      <UploadFileModule />
      <PreviewPDF />
    </>
  )
}

export default App
