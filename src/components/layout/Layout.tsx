import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Al cambiar de página, sube al inicio o salta a la sección del enlace (#)
function useScrollAlNavegar() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const destino = document.getElementById(decodeURIComponent(hash.slice(1)));
            if (destino) {
                destino.scrollIntoView();
                return;
            }
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);
}

export default function Layout() {
    useScrollAlNavegar();

    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen flex flex-col">
                <a
                    href="#contenido"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-6 focus:py-3 focus:font-bold focus:text-mei-navy focus:shadow-lg"
                >
                    Saltar al contenido
                </a>
                <Navbar />
                <main id="contenido" tabIndex={-1} className="flex-grow outline-none">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </MotionConfig>
    );
}
