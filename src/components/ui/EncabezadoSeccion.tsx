import { motion } from 'framer-motion';

interface EncabezadoSeccionProps {
    id: string;
    antetitulo: string;
    titulo: string;
    descripcion?: string;
    oscuro?: boolean;
}

// Encabezado centrado que comparten las secciones de la página de inicio
export default function EncabezadoSeccion({ id, antetitulo, titulo, descripcion, oscuro = false }: EncabezadoSeccionProps) {
    return (
        <motion.div
            className="flex flex-col items-center text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
            <p className={`font-sans font-bold text-xs md:text-sm tracking-widest uppercase mb-2 ${oscuro ? 'text-mei-gold' : 'text-mei-orange-text'}`}>
                {antetitulo}
            </p>
            <h2
                id={id}
                className={`font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 ${oscuro ? 'text-white' : 'text-mei-navy'}`}
            >
                {titulo}
            </h2>
            <div aria-hidden="true" className="md:w-96 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6" />
            {descripcion && (
                <p className={`text-base md:text-lg max-w-2xl ${oscuro ? 'text-gray-200' : 'text-gray-600'}`}>
                    {descripcion}
                </p>
            )}
        </motion.div>
    );
}
