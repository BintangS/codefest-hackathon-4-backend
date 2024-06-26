import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <main className="m-default">
        <nav>
        </nav>
        <Outlet />
      </main>
    </>
  )
  
}

export default App
