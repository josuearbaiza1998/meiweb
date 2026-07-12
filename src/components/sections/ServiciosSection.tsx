import martes from '../../assets/images/Martes.png'
import jueves from '../../assets/images/jueves.png'
import domingo from '../../assets/images/Domingo.png'
import mundo from '../../assets/images/mundo.png'
import ServiceCard from '../ui/ServiceCard'
import { motion } from 'framer-motion'

export default function ServiciosSection() {
    return (
        <section
            className="relative min-h-screen w-full flex flex-col items-center justify-start pt-16 md:pt-24 pb-24 px-6 md:px-12 bg-white overflow-hidden"
            id="servicios"
        >
            <img
                src={mundo}
                alt="Mapa del mundo de fondo"
                className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 w-full max-w-xl md:max-w-4xl lg:max-w-6xl opacity-40 pointer-events-none object-contain select-none"
                style={{ zIndex: 0 }}
            />

            <div className="relative max-w-7xl mx-auto w-full text-center" style={{ zIndex: 1 }}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-[#1a2a4e] mb-4">
                            Nuestros Servicios
                        </h2>

                        <div className="md:w-96 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>

                        <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-12 md:mb-16">
                            Te invitamos a ser parte de nuestros servicios y disfrutar juntos un tiempo de palabra y comunión en la presencia del Señor.
                        </p>
                    </motion.div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto text-left">

                    <ServiceCard
                        image={martes}
                        title="Martes de Oración"
                        description="La oración abre caminos, fortalece la fe y nos acerca más a Dios. Te esperamos los días martes en nuestro Servicio de Oración."
                        time="5:30 pm"
                        location="TaberMEI Central"
                        delay={0.2}
                    />

                    <ServiceCard
                        image={jueves}
                        title="Jueves de Formación Bíblica"
                        description="Seguimos creciendo en el conocimiento de la Palabra. Te esperamos los días Jueves de Formación e Instrucción Bíblica."
                        time="5:30 pm"
                        location="TaberMEI Central"
                        delay={0.4}
                    />

                    <ServiceCard
                        image={domingo}
                        title="Servicios Dominicales"
                        description="El domingo es del Señor. Reunámonos como iglesia para exaltarle en nuestros servicios"
                        time="6:00am & 10:00am"
                        location="TaberMEI Central"
                        delay={0.6}
                    />

                </div>
            </div>
        </section>
    )
}