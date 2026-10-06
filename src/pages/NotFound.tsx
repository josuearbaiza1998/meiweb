import { Link } from 'react-router-dom';
import EncabezadoPagina from '../components/ui/EncabezadoPagina';

export default function NotFound() {
    return (
        <EncabezadoPagina antetitulo="Error 404" titulo="Página no encontrada">
            <p className="text-lg text-gray-200 mb-8">La página que buscas no existe o fue movida.</p>
            <Link
                to="/"
                className="inline-block rounded-full bg-white px-8 py-4 font-bold text-mei-blue transition-colors hover:bg-mei-gold hover:text-mei-night"
            >
                Volver al inicio
            </Link>
        </EncabezadoPagina>
    );
}
