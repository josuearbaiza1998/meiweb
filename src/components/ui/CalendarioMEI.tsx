import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AgendaEventos } from '../../data/eventos';

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const DIAS_SEMANA = [
    { corto: 'D', largo: 'Domingo' },
    { corto: 'L', largo: 'Lunes' },
    { corto: 'M', largo: 'Martes' },
    { corto: 'M', largo: 'Miércoles' },
    { corto: 'J', largo: 'Jueves' },
    { corto: 'V', largo: 'Viernes' },
    { corto: 'S', largo: 'Sábado' },
];

const formatoFechaLarga = new Intl.DateTimeFormat('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const formatoMes = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });

interface CalendarioMEIProps {
    eventos: AgendaEventos;
    diaSeleccionado: string | undefined;
    onSeleccionar: (clave: string) => void;
}

export default function CalendarioMEI({ eventos, diaSeleccionado, onSeleccionar }: CalendarioMEIProps) {
    // Abre el calendario en el mes del día seleccionado (el próximo evento)
    const [fechaActual, setFechaActual] = useState(() =>
        diaSeleccionado ? new Date(diaSeleccionado + 'T00:00:00') : new Date()
    );

    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth(); // 0 = Enero, 11 = Diciembre

    const nombreMesAño = formatoMes.format(fechaActual);

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
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-mei-navy leading-tight">
                    Calendario
                </h3>
                <p className="font-sans text-xs md:text-sm text-mei-orange-text font-bold mt-1 uppercase tracking-wider">
                    Selecciona un día con eventos
                </p>
            </div>

            <div className="w-full bg-[#F3F6FA] rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 text-mei-navy border border-slate-200/60 relative overflow-hidden">

                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                    <p className="font-serif font-bold text-xl text-mei-navy capitalize" aria-live="polite">
                        {nombreMesAño}
                    </p>
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={irMesAnterior}
                            aria-label="Mes anterior"
                            className="p-2 rounded-lg border border-slate-400/70 text-slate-600 hover:bg-white hover:text-mei-navy hover:shadow-sm transition cursor-pointer"
                        >
                            <ChevronLeft size={18} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={irMesSiguiente}
                            aria-label="Mes siguiente"
                            className="p-2 rounded-lg border border-slate-400/70 text-slate-600 hover:bg-white hover:text-mei-navy hover:shadow-sm transition cursor-pointer"
                        >
                            <ChevronRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                </div>

                {/* dias de la semana */}
                <div className="grid grid-cols-7 gap-1 mb-2 text-center font-sans font-bold text-xs text-slate-600 uppercase tracking-wider">
                    {DIAS_SEMANA.map((d) => (
                        <abbr key={d.largo} title={d.largo} className="no-underline">
                            {d.corto}
                        </abbr>
                    ))}
                </div>

                {/* grid numerico */}
                <div className="grid grid-cols-7 gap-1.5 mb-6">
                    {diasVaciosInicio.map((_, i) => (
                        <div key={`vacio-${i}`} className="aspect-square" aria-hidden="true" />
                    ))}

                    {diasDelMes.map((dia) => {
                        const clave = `${año}-${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
                        const cantidad = eventos[clave]?.length ?? 0;
                        const tieneEvento = cantidad > 0;
                        const esSeleccionado = diaSeleccionado === clave;
                        const esHoy = esMesActual && dia === diaDeHoy;

                        const etiqueta = [
                            formatoFechaLarga.format(new Date(año, mes, dia)),
                            esHoy ? 'hoy' : '',
                            tieneEvento ? (cantidad === 1 ? '1 evento' : `${cantidad} eventos`) : 'sin eventos',
                        ].filter(Boolean).join(', ');

                        return (
                            <button
                                type="button"
                                key={dia}
                                onClick={() => tieneEvento && onSeleccionar(clave)}
                                disabled={!tieneEvento}
                                aria-label={etiqueta}
                                aria-pressed={tieneEvento ? esSeleccionado : undefined}
                                aria-current={esHoy ? 'date' : undefined}
                                className={`relative aspect-square rounded-xl flex items-center justify-center font-sans text-sm transition-all duration-200 ${esSeleccionado
                                    ? 'bg-mei-orange-text text-white shadow-md shadow-mei-orange/30 font-bold scale-105 z-10'
                                    : tieneEvento
                                        ? 'bg-white text-mei-navy font-bold hover:bg-slate-50 cursor-pointer shadow-sm border-2 border-mei-orange/70 underline decoration-2 underline-offset-4 decoration-mei-orange'
                                        : 'text-slate-500 cursor-default'
                                    } ${esHoy && !esSeleccionado ? 'ring-2 ring-[#0047FF] font-bold text-[#0047FF]' : ''
                                    }`}
                            >
                                {dia}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/80 text-xs text-slate-600 font-sans" aria-hidden="true">
                    <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded bg-white inline-flex items-center justify-center border-2 border-mei-orange/70 text-[9px] font-bold underline decoration-mei-orange">1</span>
                        <span>Días con eventos programados (subrayados)</span>
                    </div>
                    {esMesActual && (
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded inline-block ring-2 ring-[#0047FF]" />
                            <span>Día actual</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
