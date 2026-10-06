import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import mei from '../../assets/images/mei.webp'

const ENLACES = [
    { texto: 'Inicio', to: '/' },
    { texto: 'Servicios', to: '/#servicios' },
    { texto: 'Ministerios', to: '/#ministerios' },
    { texto: 'Agenda', to: '/#agenda' },
    { texto: 'Oración', to: '/#oracion' },
    { texto: 'Contacto', to: '/#contacto' },
    { texto: 'Acerca de', to: '/acerca-de' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cierra el menú con la tecla Escape
    useEffect(() => {
        if (!menuAbierto) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuAbierto(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [menuAbierto]);

    const solido = scrolled || menuAbierto || pathname !== '/';

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out text-white ${solido
            ? 'bg-mei-indigo/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
            }`}>
            <nav
                aria-label="Principal"
                className={`px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
            >
                <Link to="/" className="hover:opacity-80 transition-opacity duration-200 flex items-center">
                    <img
                        src={mei}
                        alt="Ministerios Emanuel Internacional, ir al inicio"
                        className={`transition-all duration-300 ${scrolled ? 'w-24' : 'w-28 md:w-32'}`}
                    />
                </Link>

                <ul className="hidden lg:flex items-center gap-7 font-medium">
                    {ENLACES.map((enlace) => (
                        <li key={enlace.to}>
                            <Link
                                to={enlace.to}
                                aria-current={enlace.to === pathname && !hash ? 'page' : undefined}
                                className="relative hover:text-mei-gold transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-mei-gold after:transition-all after:duration-300 hover:after:w-full aria-[current=page]:text-mei-gold"
                            >
                                {enlace.texto}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 transition-colors"
                    aria-expanded={menuAbierto}
                    aria-controls="menu-movil"
                    onClick={() => setMenuAbierto((abierto) => !abierto)}
                >
                    {menuAbierto ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
                    <span className="sr-only">{menuAbierto ? 'Cerrar menú' : 'Abrir menú'}</span>
                </button>
            </nav>

            <div id="menu-movil" hidden={!menuAbierto} className="lg:hidden border-t border-white/10">
                <ul className="flex flex-col px-6 py-4 font-medium text-lg">
                    {ENLACES.map((enlace) => (
                        <li key={enlace.to}>
                            <Link
                                to={enlace.to}
                                onClick={() => setMenuAbierto(false)}
                                className="block rounded-lg px-3 py-3 hover:bg-white/10 hover:text-mei-gold transition-colors"
                            >
                                {enlace.texto}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
