import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarioMEI from '../ui/CalendarioMEI';

const EVENTOS: Record<string, {
    lista: Array<{
        id: number;
        titulo: string;
        categoria: string;
        hora: string;
        lugar: string;
        descripcion: string;
        imagen: string;
    }>;
}> = {
    "2026-07-03": {
        lista: [
            {
                id: 1,
                titulo: "Palabra Profética, Primicias y Ayuno",
                categoria: "Culto Especial",
                hora: "10:00 AM",
                lugar: "TaberMEI Central",
                descripcion: "Únete a nosotros en un tiempo especial de consagración, primicias y alabanza para iniciar el mes bajo la dirección del Espíritu Santo.",
                imagen: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                titulo: "Escuela de Lideres",
                categoria: "Educación",
                hora: "8:30 AM",
                lugar: "TaberMEI Central",
                descripcion: "Clases formativas para todas las edades. Aprendiendo juntos la Palabra de Dios con herramientas prácticas para la vida diaria.",
                imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    "2026-07-14": {
        lista: [
            {
                id: 3,
                titulo: "Jueves de Formación e Instrucción Bíblica",
                categoria: "Educación",
                hora: "5:30 PM",
                lugar: "TaberMEI Central - Auditorio",
                descripcion: "Seguimos creciendo en el conocimiento de la Palabra. Un espacio diseñado para discipular y desarrollar los dones en cada miembro.",
                imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ]
    },
    "2026-07-29": {
        lista: [
            {
                id: 4,
                titulo: "Vigilia de Adoración y Oración",
                categoria: "Culto",
                hora: "6:00 PM",
                lugar: "TaberMEI Central",
                descripcion: "Una noche de clamor, alabanza y búsqueda espiritual con salmistas invitados. Ven con fe a depositar tus peticiones ante el altar.",
                imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ]
    }
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function AgendaSection() {
    const proximoEvento = Object.keys(EVENTOS).sort()[0];
    const [diaSeleccionado, setDiaSeleccionado] = useState<string>(proximoEvento);
    const datosDia = EVENTOS[diaSeleccionado];

    return (
        <section
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-[#FCFBFA] text-[#1a2a4e] overflow-hidden"
            id="agenda"
        >
            <motion.div
                className="relative max-w-7xl mx-auto w-full flex flex-col items-center text-center mb-12 lg:mb-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUpVariant}
            >
                <span className="font-sans font-bold text-xs md:text-sm tracking-widest uppercase text-[#E58B00] mb-2">
                    Participa en comunidad
                </span>
                <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1a2a4e] tracking-tight mb-4">
                    Agenda de Eventos
                </h2>
                <div className="md:w-96 w-48 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
            </motion.div>

            <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

                <CalendarioMEI
                    eventos={EVENTOS}
                    diaSeleccionado={diaSeleccionado}
                    onSeleccionar={setDiaSeleccionado}
                />

                <div className="w-full lg:w-8/12 flex flex-col">

                    {datosDia && (
                        <motion.div
                            key={`header-${diaSeleccionado}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 flex items-baseline justify-between border-b border-slate-200/80 pb-4"
                        >
                            <div>
                                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1a2a4e] leading-tight">
                                    {new Date(diaSeleccionado + 'T00:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </h3>
                                <p className="font-sans text-xs md:text-sm text-[#E58B00] font-bold mt-1 uppercase tracking-wider">
                                    {datosDia.lista.length === 1 ? '1 evento este día' : `${datosDia.lista.length} eventos este día`}
                                </p>
                            </div>
                        </motion.div>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={diaSeleccionado}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            {datosDia ? (
                                datosDia.lista.map((ev) => (
                                    <div
                                        key={ev.id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-200/80 flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:border-[#E58B00]/40 hover:-translate-y-1 group"
                                    >
                                        <div className="sm:w-5/12 relative min-h-[220px] sm:min-h-full bg-slate-100 overflow-hidden">
                                            <img
                                                src={ev.imagen}
                                                alt={ev.titulo}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 bg-[#E58B00] text-white font-sans font-bold text-xs px-3 py-1 rounded-full shadow-md tracking-wide">
                                                {ev.categoria}
                                            </span>
                                        </div>

                                        <div className="sm:w-7/12 p-6 md:p-8 flex flex-col justify-between text-[#1a2a4e]">
                                            <div>
                                                <h4 className="font-serif font-bold text-xl md:text-2xl text-[#1a2a4e] mb-3 leading-snug ">
                                                    {ev.titulo}
                                                </h4>

                                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm text-slate-500 font-sans mb-4">
                                                    <div className="flex items-center gap-1.5 font-medium">
                                                        <svg className="w-4 h-4 text-[#E58B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        <span>{ev.hora}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 font-medium">
                                                        <svg className="w-4 h-4 text-[#E58B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                        <span>{ev.lugar}</span>
                                                    </div>
                                                </div>

                                                <p className="font-sans text-sm text-[#1a2a4e]/75 leading-relaxed mb-6">
                                                    {ev.descripcion}
                                                </p>
                                            </div>


                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-12 text-center text-slate-400 font-sans flex flex-col items-center justify-center">
                                    <svg className="w-12 h-12 mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="font-semibold text-slate-600">No hay eventos programados para esta fecha.</p>
                                    <p className="text-xs text-slate-400 mt-1">Selecciona un día resaltado en naranja en el calendario.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>

            </div>
        </section>
    );
}