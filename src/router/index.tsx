import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from '../pages/Home'
import About from '../pages/About'
import ServicioDetalle from '../pages/ServicioDetalle'
import NotFound from '../pages/NotFound'
import Layout from '../components/layout/Layout'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: 'acerca-de', element: <About /> },
            { path: 'about', element: <Navigate to="/acerca-de" replace /> },
            { path: 'servicios/:slug', element: <ServicioDetalle /> },
            { path: '*', element: <NotFound /> },
        ],
    },
], { basename: import.meta.env.BASE_URL })

export default router
