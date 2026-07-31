import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

interface CalendarioMEIProps {
    eventos: Record<string, unknown>;
    diaSeleccionado: string;
    onSeleccionar: (clave: string) => void;
}

export default function CalendarioMEI({ eventos, diaSeleccionado, onSeleccionar }: CalendarioMEIProps) {
    const fechaInicial = Object.keys(eventos).length > 0
        ? new Date(Object.keys(eventos)[0] + 'T00:00:00')
        : new Date();
    const [fechaActual, setFechaActual] = useState(fechaInicial);

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth(); // 0 = Enero, 11 = Diciembre

    const nombreMesAño = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(fechaActual);

    const totalDiasMes = new Date(año, mes + 1, 0).getDate();
    const primerDiaSemana = new Date(año, mes, 1).getDay(); // 0 = Domingo

    const diasVaciosInicio = Array.from({ length: primerDiaSemana }, (_, i) => i);
    const diasDelMes = Array.from({ length: totalDiasMes }, (_, i) => i + 1);

    const hoy = new Date();
    const esMesActual = hoy.getFullYear() === año && hoy.getMonth() === mes;
    const diaDeHoy = hoy.getDate();

    const irMesAnterior = () => setFechaActual(new Date(año, mes - 1, 1));
    const irMesSiguiente = () => setFechaActual(new Date(año, mes + 1, 1));

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            className="w-full lg:w-4/12 flex flex-col"
        >
            <div className="mb-6 pb-4 border-b border-slate-200/80 ml-2">
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1a2a4e] leading-tight">
                    Calendario
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#E58B00] font-bold mt-1 uppercase tracking-wider">
                    Selecciona un día
                </p>
            </div>

            <div className="w-full bg-[#F3F6FA] rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 text-[#1a2a4e] border border-slate-200/60 relative overflow-hidden">

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                    <h3 className="font-serif font-bold text-xl text-[#1a2a4e] capitalize">
                        {nombreMesAño}
                    </h3>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={irMesAnterior}
                            title="Mes anterior"
                            className="p-1.5 rounded-lg border border-slate-300/70 text-slate-500 hover:bg-white hover:text-[#1a2a4e] hover:shadow-sm transition cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={irMesSiguiente}
                            title="Mes siguiente"
                            className="p-1.5 rounded-lg border border-slate-300/70 text-slate-500 hover:bg-white hover:text-[#1a2a4e] hover:shadow-sm transition cursor-pointer"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* dias de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2 text-center font-sans font-bold text-xs text-slate-400 uppercase tracking-wider">
                    <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
                </div>

                {/* grid numerico */}
                <div className="grid grid-cols-7 gap-1.5 mb-6">
                    {diasVaciosInicio.map((_, i) => (
                        <div key={`vacio-${i}`} className="aspect-square" />
                    ))}

                    {diasDelMes.map((dia) => {
                        const clave = `${año}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
                        const tieneEvento = !!eventos[clave];
                        const esSeleccionado = diaSeleccionado === clave;
                        const esHoy = esMesActual && dia === diaDeHoy;

                        return (
                            <button
                                key={dia}
                                onClick={() => tieneEvento && onSeleccionar(clave)}
                                disabled={!tieneEvento}
                                className={`relative aspect-square rounded-xl flex items-center justify-center font-sans text-sm transition-all duration-200 ${esSeleccionado
                                    ? 'bg-[#E58B00] text-white shadow-md shadow-[#E58B00]/30 font-bold scale-105 z-10'
                                    : tieneEvento
                                        ? 'bg-white text-[#1a2a4e] font-bold hover:bg-slate-50 cursor-pointer shadow-sm border border-slate-200/60'
                                        : 'text-slate-400 hover:bg-slate-200/50 cursor-default'
                                    } ${esHoy && !esSeleccionado ? 'ring-2 ring-[#0047FF] font-bold text-[#0047FF]' : ''
                                    }`}
                            >
                                {dia}
                                {tieneEvento && !esSeleccionado && (
                                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#E58B00]" />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/80 text-xs text-slate-500 font-sans">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded bg-white inline-block border border-slate-300 shadow-2xs relative flex items-center justify-center">
                            <span className="w-1 h-1 rounded-full bg-[#E58B00]" />
                        </span>
                        <span>Días con eventos programados</span>
                    </div>
                    {esMesActual && (
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded inline-block ring-2 ring-[#0047FF]" />
                            <span>Día actual</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}