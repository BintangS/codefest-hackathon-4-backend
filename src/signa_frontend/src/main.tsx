import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { pdfjs } from 'react-pdf';
import HomepageModule from './modules/WelcomepageModule'
import NotfoundModule from './modules/NotfoundModule';
import LoginModule from './modules/LoginModule';
import UploadfileModule from './modules/UploadfileModule';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Set the workerSrc to the imported worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotfoundModule />,
    children: [
      {
        path: '/',
        element: <HomepageModule />,
      },
      {
        path: '/login',
        element: <LoginModule />,
      },
      {
        path: '/upload',
        element: <UploadfileModule />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
