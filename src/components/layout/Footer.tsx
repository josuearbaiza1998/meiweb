import { Link } from 'react-router-dom';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import mei from '../../assets/images/mei.webp';
import { HORARIOS, IGLESIA } from '../../data/iglesia';
import RedesSociales from '../ui/RedesSociales';

const ENLACES = [
    { texto: 'Servicios', to: '/#servicios' },
    { texto: 'Ministerios', to: '/#ministerios' },
    { texto: 'Agenda de eventos', to: '/#agenda' },
    { texto: 'Peticiones de oración', to: '/#oracion' },
    { texto: 'Contacto', to: '/#contacto' },
    { texto: 'Nuestra historia', to: '/acerca-de' },
];

export default function Footer() {
    return (
        <footer className="bg-mei-night text-gray-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img src={mei} alt="Ministerios Emanuel Internacional" className="w-40 mb-5" />
                    <p className="text-sm leading-relaxed mb-6">
                        Una iglesia cristiana donde la Palabra de Dios guía tu propósito y la fe se hace acción. ¡Te esperamos!
                    </p>
                    <RedesSociales />
                </div>

                <div>
                    <h2 className="font-serif text-xl font-bold text-white mb-5">Horarios</h2>
                    <ul className="space-y-4 text-sm">
                        {HORARIOS.map((h) => (
                            <li key={h.dia} className="flex gap-3">
                                <Clock size={18} className="text-mei-gold shrink-0 mt-0.5" aria-hidden="true" />
                                <span>
                                    <span className="block font-semibold text-white">{h.dia}</span>
                                    {h.nombre}, {h.hora}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-serif text-xl font-bold text-white mb-5">Visítanos</h2>
                    <address className="not-italic space-y-4 text-sm">
                        <p className="flex gap-3">
                            <MapPin size={18} className="text-mei-gold shrink-0 mt-0.5" aria-hidden="true" />
                            <span>
                                {IGLESIA.templo}
                                <br />
                                {IGLESIA.direccion}
                                <br />
                                {IGLESIA.ciudad}
                            </span>
                        </p>
                        <p className="flex gap-3">
                            <Phone size={18} className="text-mei-gold shrink-0 mt-0.5" aria-hidden="true" />
                            <a href={IGLESIA.telefonoHref} className="hover:text-mei-gold underline-offset-4 hover:underline">
                                {IGLESIA.telefono}
                            </a>
                        </p>
                        <p className="flex gap-3">
                            <Mail size={18} className="text-mei-gold shrink-0 mt-0.5" aria-hidden="true" />
                            <a href={`mailto:${IGLESIA.correo}`} className="break-all hover:text-mei-gold underline-offset-4 hover:underline">
                                {IGLESIA.correo}
                            </a>
                        </p>
                    </address>
                </div>

                <div>
                    <h2 className="font-serif text-xl font-bold text-white mb-5">Ubicación</h2>
                    <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] bg-white/5 mb-4">
                        <iframe
                            title={`Mapa de ubicación de ${IGLESIA.nombre}`}
                            src={IGLESIA.mapaEmbed}
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <a
                        href={IGLESIA.mapaEnlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-mei-gold hover:underline underline-offset-4"
                    >
                        Abrir en Google Maps<span className="sr-only"> (se abre en otra pestaña)</span>
                    </a>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">
                    <nav aria-label="Enlaces del pie de página">
                        <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            {ENLACES.map((enlace) => (
                                <li key={enlace.to}>
                                    <Link to={enlace.to} className="hover:text-mei-gold transition-colors">
                                        {enlace.texto}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <p>© {new Date().getFullYear()} {IGLESIA.nombre}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
