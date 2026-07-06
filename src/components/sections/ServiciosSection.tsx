import martes from '../../assets/images/Martes.png'
import jueves from '../../assets/images/jueves.png'
import domingo from '../../assets/images/Domingo.png'
import mundo from '../../assets/images/mundo.png'
import ServiceCard from '../ui/ServiceCard'
import { motion } from 'framer-motion'

export default function ServiciosSection() {
    return (
        <section
            className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-2 md:px-12 bg-white"
            id="servicios"
        >
            <div className="relative max-w-7xl mx-auto w-full text-center">

                <motion.div
                    style={{ position: 'relative', zIndex: 1 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-[#1a2a4e] mb-4 mt-5">
                        Nuestros Servicios
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-16">
                        Te invitamos a ser parte de nuestros servicios y disfrutar juntos un tiempo de palabra y comunión en la presencia del Señor.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto text-left relative" style={{ zIndex: 1 }}>

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
                        delay={0.4}
                    />

                </div>
                <img src={mundo} className='absolute w-5xl bottom-0 top-20 right-150' style={{ zIndex: 0, clipPath: "inset(0% 0% 12% 15%)" }} />
            </div>
        </section>
    )
}