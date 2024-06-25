import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center gap-5 pt-32 pb-20">
      <nav className="absolute top-0 flex flex-row items-center justify-between w-full py-10 px-5 md:px-10">
      </nav>
      <Outlet />
    </main>
    // <>
    //   <h1 className="text-9xl font-bold underline">
    //     Signa!
    //   </h1>
    //   <p className="m-default">
    //     Trusted, Decentralized, and Easy to use document signing on the Blockchain. <br />
    //   </p>
    //   <UploadFileModule />
    //   <PreviewPDF />
    // </>
  )
  
}

export default App
