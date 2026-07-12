import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import mei from '../../assets/images/mei.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 flex items-center justify-between text-white ${scrolled
            ? 'bg-[#232659]/90 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
            : 'bg-transparent border-b border-transparent py-6'
            }`}>
            <div className="text-2xl font-bold tracking-tight">
                <Link to="/" className="hover:opacity-80 transition-opacity duration-200 flex items-center">
                    <img
                        src={mei}
                        alt="Logo TaberMEI"
                        className={`transition-all duration-300 ${scrolled ? 'w-10' : 'w-14'}`}
                    />
                </Link>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium">
                <Link
                    to="/"
                    className="relative hover:text-[#EFB810] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#EFB810] after:transition-all after:duration-300 hover:after:w-full"
                >
                    Inicio
                </Link>

                <Link
                    to="/About"
                    className="relative hover:text-[#EFB810] transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#EFB810] after:transition-all after:duration-300 hover:after:w-full"
                >
                    Acerca de
                </Link>
            </div>
        </nav>
    );
}