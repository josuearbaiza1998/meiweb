import { motion } from 'framer-motion';
import { useTransmisionEnVivo } from '../../hooks/useTransmisionEnVivo';

/**
 * Muestra el servicio en vivo de YouTube. Si en este momento no hay
 * transmisión, la sección no se dibuja.
 */
export default function EnVivoSection() {
    const enVivo = useTransmisionEnVivo();

    if (!enVivo) return null;

    return (
        <section
            id="en-vivo"
            aria-labelledby="en-vivo-titulo"
            className="relative w-full bg-mei-night text-white px-6 md:px-12 py-16 lg:py-24 overflow-hidden"
        >
            <div aria-hidden="true" className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-mei-blue/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-5xl mx-auto"
            >
                <div className="flex flex-col items-center text-center mb-8">
                    <p className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4">
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-white" />
                        En vivo ahora
                    </p>
                    <h2 id="en-vivo-titulo" className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3">
                        Estamos transmitiendo
                    </h2>
                    <p className="text-gray-200 max-w-xl">
                        Acompáñanos desde donde estés: {enVivo.titulo}
                    </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video bg-black">
                    <iframe
                        title={`Servicio en vivo: ${enVivo.titulo}`}
                        src={`https://www.youtube-nocookie.com/embed/${enVivo.videoId}?autoplay=0`}
                        className="w-full h-full border-0"
                        allow="accelerometer; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        </section>
    );
}
