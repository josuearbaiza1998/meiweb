import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import congre from '../../assets/images/congregacion.webp'

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function NosotrosSection() {
    return (
        <section
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-[#FCFBFA] overflow-hidden"
            id="nosotros"
            aria-labelledby="nosotros-titulo"
        >
            {/* Elemento decorativo de fondo */}
            <div aria-hidden="true" className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-mei-orange/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ visible: { transition: { staggerChildren: 0.25 } } }}
            >

                <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2 relative group">
                    <div aria-hidden="true" className="absolute -inset-3 bg-gradient-to-tr from-mei-navy to-[#0047FF] rounded-3xl opacity-10 blur-lg transition duration-500 group-hover:opacity-20" />

                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-mei-navy/15 aspect-[4/3] w-full bg-slate-100">
                        <img
                            src={congre}
                            alt="Congregación MEI adorando en servicio"
                            loading="lazy"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                </motion.div>

                <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase text-mei-orange-text mb-2">
                        Conoce nuestra misión
                    </span>

                    <h2 id="nosotros-titulo" className="font-serif font-bold text-4xl sm:text-4xl lg:text-5xl text-mei-navy leading-tight mb-6">
                        Nuestra Identidad
                    </h2>

                    <p className="font-sans text-base md:text-lg text-mei-navy/80 leading-relaxed mb-8">
                        Crear el ambiente propicio en donde cada miembro crezca en su amor y pasión por Dios y compasión por las almas, de tal manera que lleguen a obedecer la gran comisión de Jesucristo y alcanzar a los Perdidos, con el fin de enseñarles y desarrollar en ellos los dones y ministerios dados por el Padre, el Hijo y el Espíritu Santo.
                    </p>

                    <Link
                        to="/acerca-de"
                        className="inline-flex items-center justify-center rounded-full bg-mei-orange-text px-8 py-4 text-sm md:text-base font-bold text-white shadow-lg shadow-mei-orange/20 transition-all duration-300 hover:bg-mei-orange-dark hover:-translate-y-1 hover:shadow-xl hover:shadow-mei-orange/30"
                    >
                        Conoce Nuestra Historia
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
}