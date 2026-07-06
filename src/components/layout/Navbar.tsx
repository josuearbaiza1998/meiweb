import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import mei from '../../assets/images/mei.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 px-8 py-5 flex items-center justify-between text-white transition-all duration-300 ${scrolled ? 'bg-[#232659]/50 backdrop-blur-sm shadow-lg p-8' : 'bg-transparent'
            }`}>
            <div className="text-2xl font-bold tracking-tight">
                <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
                    <img src={mei} className="w-12">
                    </img>
                </Link>
            </div>

            <div className="flex items-center gap-8 font-medium">
                <Link
                    to="/"
                    className="relative hover:text-blue-200 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Inicio
                </Link>

                <Link
                    to="/About"
                    className="relative hover:text-blue-200 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                    Acerca de
                </Link>

            </div>
        </nav>
    );
}