import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import imagen1 from '../../assets/images/imagen1.webp'
import imagen2 from '../../assets/images/imagen2.webp'
import imagen3 from '../../assets/images/imagen3.webp'
import imagen4 from '../../assets/images/imagen4.webp'
import mei from '../../assets/images/mei-logo.png'

const SLIDES = [
    imagen1,
    imagen2,
    imagen3,
    imagen4
];

const KEN_BURNS: { x: string; y: string }[] = [
    { x: '-3%', y: '-2%' },
    { x: '3%', y: '2%' },
    { x: '-2%', y: '3%' },
];

const SLIDE_DURATION = 6;

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const reducirMovimiento = useReducedMotion();
    const [pausadoPorUsuario, setPausadoPorUsuario] = useState<boolean | null>(null);
    // Si la persona pidió reducir movimiento, el carrusel empieza en pausa
    const pausado = pausadoPorUsuario ?? !!reducirMovimiento;

    useEffect(() => {
        if (pausado) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, SLIDE_DURATION * 1000);
        return () => clearInterval(timer);
    }, [pausado]);

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    };

    return (
        <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#0A1128] text-white" id='Inicio'>

            <div className="absolute inset-0 z-0" aria-hidden="true">
                <AnimatePresence mode="sync">
                    <motion.div
                        key={currentSlide}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${SLIDES[currentSlide]})` }}
                        initial={{ opacity: 0, scale: 1.12, x: KEN_BURNS[currentSlide % KEN_BURNS.length].x, y: KEN_BURNS[currentSlide % KEN_BURNS.length].y }}
                        animate={{ opacity: 1, scale: 1, x: '0%', y: '0%' }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ opacity: { duration: 1.5, ease: 'easeInOut' }, scale: { duration: SLIDE_DURATION, ease: 'linear' }, x: { duration: SLIDE_DURATION, ease: 'linear' }, y: { duration: SLIDE_DURATION, ease: 'linear' } }}
                    />
                </AnimatePresence>
            </div>

            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A1128]/50 to-[#0A1128]/90" />

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-20 text-center md:px-12 md:pt-0" style={{ marginBottom: "120px" }}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16"
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                    }}
                >
                    <motion.img
                        src={mei}
                        alt="Ministerios Emanuel Internacional"
                        variants={fadeUpVariant}
                        className="w-56 md:w-1/2 lg:max-w-lg md:mr-10 object-contain shrink-0"
                    />

                    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
                        <motion.h1
                            variants={fadeUpVariant}
                            className="mb-4 font-serif text-4xl sm:text-5xl leading-tight drop-shadow-[0_10px_30px_rgba(0,71,255,0.4)] md:text-6xl lg:text-7xl"
                        >
                            Te damos la <br />
                            <span className="text-[#EFB810]">Bienvenida</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUpVariant}
                            className="mb-10 font-serif text-lg text-gray-200 md:text-xl lg:text-2xl max-w-lg drop-shadow-md"
                        >
                            Donde la Palabra de Dios guía tu propósito, y la fe se hace acción.
                        </motion.p>

                        <motion.div variants={fadeUpVariant}>
                            <a
                                href="#servicios"
                                className="inline-block rounded-full bg-white px-8 py-4 text-sm font-bold text-mei-blue shadow-[0_10px_20px_rgba(0,74,173,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#004AAD] hover:text-white hover:shadow-[0_15px_25px_rgba(0,74,173,0.4)] md:px-10 md:text-base"
                            >
                                Ver Próximos Servicios
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <button
                type="button"
                onClick={() => setPausadoPorUsuario(!pausado)}
                className="absolute bottom-24 right-6 md:right-12 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
                {pausado ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
                <span className="sr-only">{pausado ? 'Reanudar presentación de imágenes' : 'Pausar presentación de imágenes'}</span>
            </button>

            <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden leading-none" aria-hidden="true">
                <motion.svg
                    viewBox="0 0 2880 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[200%] fill-white opacity-80"
                    animate={pausado ? { x: '0%' } : { x: ['0%', '-50%'] }}
                    transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                >
                    <path d="M0,60 C240,10 480,110 720,60 C960,10 1200,110 1440,60 C1680,10 1920,110 2160,60 C2400,10 2640,110 2880,60 L2880,120 L0,120 Z" />
                </motion.svg>

                <motion.svg
                    viewBox="0 0 2880 120"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 w-[200%] fill-white"
                    animate={pausado ? { x: '0%' } : { x: ['0%', '-50%'] }}
                    transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
                >
                    <path d="M0,80 C480,40 960,120 1440,80 C1920,40 2400,120 2880,80 L2880,120 L0,120 Z" />
                </motion.svg>
            </div>

        </section>
    );
}