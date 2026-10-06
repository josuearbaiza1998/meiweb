import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { MINISTERIOS } from '../../data/ministerios';
import EncabezadoSeccion from '../ui/EncabezadoSeccion';

export default function MinisteriosSection() {
    return (
        <section
            id="ministerios"
            aria-labelledby="ministerios-titulo"
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-mei-indigo text-white overflow-hidden"
        >
            <div aria-hidden="true" className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-mei-gold/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto w-full">
                <EncabezadoSeccion
                    id="ministerios-titulo"
                    antetitulo="Sirviendo juntos"
                    titulo="Nuestros Ministerios"
                    descripcion="Cada ministerio es una forma de servir a Dios y a las personas. Conoce dónde puedes crecer, servir y ser parte."
                    oscuro
                />

                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {MINISTERIOS.map((ministerio, i) => {
                        const Icono = ministerio.icono;
                        return (
                            <motion.li
                                key={ministerio.id}
                                id={ministerio.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col rounded-2xl bg-white/[0.06] border border-white/10 p-7 transition-colors duration-300 hover:bg-white/10 hover:border-mei-gold/40"
                            >
                                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mei-gold text-mei-night">
                                    <Icono size={28} aria-hidden="true" />
                                </span>
                                <h3 className="font-serif text-2xl font-bold mb-2">{ministerio.titulo}</h3>
                                {ministerio.lema && (
                                    <p className="text-sm font-semibold text-mei-gold mb-4">{ministerio.lema}</p>
                                )}
                                <p className="text-base text-gray-200 leading-relaxed mb-6">{ministerio.descripcion}</p>
                                <ul className="mt-auto space-y-2 text-sm text-gray-200">
                                    {ministerio.detalles.map((detalle) => (
                                        <li key={detalle} className="flex gap-2">
                                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mei-gold" />
                                            {detalle}
                                        </li>
                                    ))}
                                </ul>
                                {ministerio.enlace && (
                                    <a
                                        href={ministerio.enlace.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-mei-gold hover:underline underline-offset-4"
                                    >
                                        {ministerio.enlace.texto}
                                        <ExternalLink size={16} aria-hidden="true" />
                                        <span className="sr-only"> (se abre en otra pestaña)</span>
                                    </a>
                                )}
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
