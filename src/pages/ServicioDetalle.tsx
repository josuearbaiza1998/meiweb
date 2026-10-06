import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, MapPin } from 'lucide-react';
import EncabezadoPagina from '../components/ui/EncabezadoPagina';
import { SERVICIOS } from '../data/servicios';
import { IGLESIA } from '../data/iglesia';
import NotFound from './NotFound';

export default function ServicioDetalle() {
    const { slug } = useParams();
    const servicio = SERVICIOS.find((s) => s.slug === slug);

    if (!servicio) return <NotFound />;

    const otros = SERVICIOS.filter((s) => s.slug !== servicio.slug);

    return (
        <>
            <EncabezadoPagina antetitulo="Nuestros servicios" titulo={servicio.titulo} imagen={servicio.imagen}>
                <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-gray-100">
                    <li className="flex items-center gap-2">
                        <CalendarDays size={20} className="text-mei-gold" aria-hidden="true" />
                        <span><span className="sr-only">Día: </span>{servicio.dia}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Clock size={20} className="text-mei-gold" aria-hidden="true" />
                        <span><span className="sr-only">Horario: </span>{servicio.hora}</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <MapPin size={20} className="text-mei-gold" aria-hidden="true" />
                        <span><span className="sr-only">Lugar: </span>{servicio.lugar}</span>
                    </li>
                </ul>
            </EncabezadoPagina>

            <div className="px-6 md:px-12 py-16 lg:py-24 bg-white">
                <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <Link to="/#servicios" className="inline-flex items-center gap-2 text-sm font-bold text-mei-blue hover:underline underline-offset-4 mb-8">
                            <ArrowLeft size={16} aria-hidden="true" />
                            Volver a los servicios
                        </Link>

                        <h2 className="font-serif font-bold text-3xl md:text-4xl text-mei-navy mb-6">Acerca de este servicio</h2>
                        <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed mb-12">
                            {servicio.descripcion.map((p) => <p key={p}>{p}</p>)}
                        </div>

                        <h2 className="font-serif font-bold text-2xl md:text-3xl text-mei-navy mb-6">¿Qué puedes esperar?</h2>
                        <ul className="grid gap-4 sm:grid-cols-2">
                            {servicio.queEsperar.map((item) => (
                                <li key={item} className="flex gap-3 rounded-xl bg-[#F3F6FA] p-5 text-gray-700">
                                    <CheckCircle2 size={22} className="text-mei-blue shrink-0" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="space-y-6" aria-label="Información adicional">
                        <figure className="rounded-2xl bg-mei-indigo text-white p-8">
                            <blockquote className="font-serif text-xl leading-snug mb-4">“{servicio.versiculo.texto}”</blockquote>
                            <figcaption className="text-mei-gold font-semibold">{servicio.versiculo.cita}</figcaption>
                        </figure>

                        <div className="rounded-2xl border border-slate-200 p-8">
                            <h2 className="font-serif text-xl font-bold text-mei-navy mb-3">¿Es tu primera vez?</h2>
                            <p className="text-gray-700 mb-5">
                                Te recibiremos con gusto. Si tienes preguntas antes de venir, llámanos al{' '}
                                <a href={IGLESIA.telefonoHref} className="font-semibold text-mei-blue underline underline-offset-4">{IGLESIA.telefono}</a>.
                            </p>
                            <Link to="/#contacto" className="inline-block rounded-full bg-mei-blue px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-mei-night">
                                Escríbenos
                            </Link>
                        </div>

                        <nav aria-label="Otros servicios" className="rounded-2xl border border-slate-200 p-8">
                            <h2 className="font-serif text-xl font-bold text-mei-navy mb-4">Otros servicios</h2>
                            <ul className="space-y-3">
                                {otros.map((s) => (
                                    <li key={s.slug}>
                                        <Link to={`/servicios/${s.slug}`} className="font-semibold text-mei-blue hover:underline underline-offset-4">
                                            {s.titulo}
                                        </Link>
                                        <span className="block text-sm text-gray-600">{s.dia}, {s.hora}</span>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    );
}
