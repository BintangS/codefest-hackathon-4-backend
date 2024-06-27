import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { pdfjs } from 'react-pdf';
import HomepageModule from './modules/WelcomepageModule'
import NotfoundModule from './modules/NotfoundModule';
import UploadfileModule from './modules/UploadfileModule';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './components/contexts/UseAuthContext/index.tsx';
import { ThemeProvider } from './components/themeProvider';
import LoginModule from './modules/LoginModule/index.tsx';
import ReceivefileModule from './modules/ReceivefileModule/index.tsx';
import SendfileModule from './modules/SendfileModule/index.tsx';
import DashboardfileModule from './modules/DashboardModule/index.tsx';
import PrivacyModule from './modules/PrivacyModule/index.tsx';

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
				element: <LoginModule />
			},
			{
				path: '/dashboard',
				element: <DashboardfileModule />
			},
			{
				path: '/upload',
				element: <UploadfileModule />,
			},
			{
				path: '/receive_pdf',
				element: <ReceivefileModule />
			},
			{
				path: '/send_pdf',
				element: <SendfileModule />
			},
			{
				path: '/privacy',
				element: <PrivacyModule />
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AuthContextProvider>
				<RouterProvider router={router} />
			</AuthContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
)
