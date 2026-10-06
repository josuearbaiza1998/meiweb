import type { ReactNode } from 'react';

interface EncabezadoPaginaProps {
    antetitulo: string;
    titulo: string;
    children?: ReactNode;
    imagen?: string;
}

// Encabezado oscuro para páginas internas (deja espacio a la barra fija)
export default function EncabezadoPagina({ antetitulo, titulo, children, imagen }: EncabezadoPaginaProps) {
    return (
        <div className="relative bg-mei-night text-white overflow-hidden">
            {imagen && (
                <img src={imagen} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            )}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-mei-night/60 to-mei-night" />
            <div className="relative max-w-5xl mx-auto px-6 md:px-12 pt-36 pb-16 md:pt-44 md:pb-24 text-center">
                <p className="font-bold text-xs md:text-sm tracking-widest uppercase text-mei-gold mb-3">{antetitulo}</p>
                <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">{titulo}</h1>
                {children}
            </div>
        </div>
    );
}
