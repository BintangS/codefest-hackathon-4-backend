import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <h1 className="text-9xl font-bold underline">
        Signa!
      </h1>
      <main className="m-default">
        <nav>
        </nav>
        <Outlet />
      </main>
    </>
  )
  
}

export default App
