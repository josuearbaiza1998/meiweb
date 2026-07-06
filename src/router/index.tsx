import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/Home'
import About from '../pages/About'
import Layout from '../components/layout/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: 'about', element: <About /> },
        ],
    },
])

export default router
