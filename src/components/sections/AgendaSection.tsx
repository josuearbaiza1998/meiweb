import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarioMEI from '../ui/CalendarioMEI';
import EncabezadoSeccion from '../ui/EncabezadoSeccion';
import { EVENTOS, proximaFechaConEventos } from '../../data/eventos';

export default function AgendaSection() {
    const [diaSeleccionado, setDiaSeleccionado] = useState(() => proximaFechaConEventos(EVENTOS));
    const eventosDia = diaSeleccionado ? EVENTOS[diaSeleccionado] : undefined;

    return (
        <section
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-[#FCFBFA] text-mei-navy overflow-hidden"
            id="agenda"
            aria-labelledby="agenda-titulo"
        >
            <div className="relative max-w-7xl mx-auto w-full">
                <EncabezadoSeccion id="agenda-titulo" antetitulo="Participa en comunidad" titulo="Agenda de Eventos" />
            </div>

            <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-10">

                <CalendarioMEI
                    eventos={EVENTOS}
                    diaSeleccionado={diaSeleccionado}
                    onSeleccionar={setDiaSeleccionado}
                />

                <div className="w-full lg:w-8/12 flex flex-col" aria-live="polite">

                    {diaSeleccionado && eventosDia && (
                        <motion.div
                            key={`header-${diaSeleccionado}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 flex items-baseline justify-between border-b border-slate-200/80 pb-4"
                        >
                            <div>
                                <h3 className="font-serif font-bold text-2xl md:text-3xl text-mei-navy leading-tight">
                                    {new Date(diaSeleccionado + 'T00:00:00').toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </h3>
                                <p className="font-sans text-xs md:text-sm text-mei-orange-text font-bold mt-1 uppercase tracking-wider">
                                    {eventosDia.length === 1 ? '1 evento este día' : `${eventosDia.length} eventos este día`}
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
                            {eventosDia ? (
                                eventosDia.map((ev) => (
                                    <article
                                        key={ev.id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/60 border border-slate-200/80 flex flex-col sm:flex-row transition-all duration-300 hover:shadow-xl hover:border-mei-orange/40 hover:-translate-y-1 group"
                                    >
                                        <div className="sm:w-5/12 relative min-h-[220px] sm:min-h-full bg-slate-100 overflow-hidden">
                                            <img
                                                src={ev.imagen}
                                                alt=""
                                                loading="lazy"
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                            <span className="absolute top-4 left-4 bg-mei-orange-text text-white font-sans font-bold text-xs px-3 py-1 rounded-full shadow-md tracking-wide">
                                                {ev.categoria}
                                            </span>
                                        </div>

                                        <div className="sm:w-7/12 p-6 md:p-8 flex flex-col justify-between text-mei-navy">
                                            <div>
                                                <h4 className="font-serif font-bold text-xl md:text-2xl text-mei-navy mb-3 leading-snug ">
                                                    {ev.titulo}
                                                </h4>

                                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm text-slate-600 font-sans mb-4">
                                                    <div className="flex items-center gap-1.5 font-medium">
                                                        <svg aria-hidden="true" className="w-4 h-4 text-mei-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                        <span>{ev.hora}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 font-medium">
                                                        <svg aria-hidden="true" className="w-4 h-4 text-mei-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                        <span>{ev.lugar}</span>
                                                    </div>
                                                </div>

                                                <p className="font-sans text-sm text-gray-700 leading-relaxed mb-6">
                                                    {ev.descripcion}
                                                </p>
                                            </div>


                                        </div>
                                    </article>
                                ))
                            ) : (
                                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-12 text-center text-slate-600 font-sans flex flex-col items-center justify-center">
                                    <svg aria-hidden="true" className="w-12 h-12 mb-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <p className="font-semibold text-slate-600">No hay eventos programados para esta fecha.</p>
                                    <p className="text-sm text-slate-600 mt-1">Selecciona en el calendario un día subrayado.</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                </div>

            </div>
        </section>
    );
}