import { Link } from 'react-router-dom';
import { Compass, Flame, Target } from 'lucide-react';
import congre from '../assets/images/congregacion.webp';
import imagen2 from '../assets/images/imagen2.webp';
import EncabezadoPagina from '../components/ui/EncabezadoPagina';
import { IGLESIA } from '../data/iglesia';

// Resumen de historia (borrador). Se redactó con información del sitio
// actual y del sitio anterior de la iglesia (ministeriosemanuel.net) y con
// noticias públicas. No se encontró el año de fundación: agrégalo aquí
// cuando la iglesia lo confirme.

const PILARES = [
    {
        icono: Compass,
        titulo: 'Visión',
        texto: 'Establecer el Reino de Dios sobre toda persona que esté a nuestro alcance.',
    },
    {
        icono: Target,
        titulo: 'Misión',
        texto: 'Ganar personas para el Reino de Cristo, afirmarlas en la fe, discipularlas en sus enseñanzas y enviarlas a servir según el llamado y los dones que Dios les ha dado.',
    },
    {
        icono: Flame,
        titulo: 'Lo que creemos',
        texto: 'Creemos en la Biblia como Palabra de Dios, en un solo Dios en tres personas (Padre, Hijo y Espíritu Santo), en la obra redentora de Jesucristo y en el poder transformador del Espíritu Santo en la vida del creyente.',
    },
];

function About() {
    return (
        <>
            <EncabezadoPagina antetitulo="Acerca de nosotros" titulo="Nuestra Historia" imagen={imagen2}>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Una iglesia cristiana en avivamiento en Santa Rosa de Lima, llevando el amor de Dios a nuestra ciudad y a las naciones.
                </p>
            </EncabezadoPagina>

            <section aria-labelledby="historia-titulo" className="px-6 md:px-12 py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
                    <div>
                        <h2 id="historia-titulo" className="font-serif font-bold text-3xl md:text-4xl text-mei-navy mb-6">
                            Un tabernáculo para Emanuel, “Dios con nosotros”
                        </h2>
                        <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                {IGLESIA.nombre} es una iglesia evangélica con sede en {IGLESIA.ciudad}. Nuestro templo, conocido
                                con cariño como el TaberMEI, es el lugar donde cada semana nos reunimos para orar, aprender la
                                Palabra y celebrar juntos la presencia de Dios.
                            </p>
                            <p>
                                Bajo el liderazgo de los pastores Ángel Emilio Ortez Andrade, Josué Neris Parada y Joaquín
                                Arquímedes Campos, la congregación aprendió a vivir por fe y a soñar en grande. De ese llamado nació una iglesia que no solo se reúne dentro
                                de cuatro paredes: con el tiempo, la Palabra comenzó a llegar a los hogares por medio de la
                                radio y la televisión, alcanzando a familias de toda la región.
                            </p>
                            <p>
                                En abril de 2020 despedimos con dolor y gratitud a nuestro pastor general, Ángel Emilio Ortez.
                                Su legado de fe sigue vivo en cada familia que fue tocada por su ministerio y en un equipo
                                pastoral que continúa la visión que Dios puso en su corazón.
                            </p>
                            <p>
                                Hoy seguimos creciendo como una familia que busca a Dios, forma discípulos y sirve a su
                                comunidad. Nuestras puertas están abiertas para ti.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div aria-hidden="true" className="absolute -inset-3 bg-gradient-to-tr from-mei-navy to-mei-blue rounded-3xl opacity-10 blur-lg" />
                        <img
                            src={congre}
                            alt="La congregación de MEI reunida en un servicio"
                            className="relative rounded-2xl shadow-2xl shadow-mei-navy/15 aspect-[4/3] w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section aria-labelledby="pilares-titulo" className="px-6 md:px-12 py-20 lg:py-28 bg-[#FCFBFA]">
                <div className="max-w-6xl mx-auto">
                    <h2 id="pilares-titulo" className="font-serif font-bold text-3xl md:text-4xl text-mei-navy mb-12 text-center">
                        Lo que nos mueve
                    </h2>
                    <ul className="grid gap-6 md:grid-cols-3">
                        {PILARES.map(({ icono: Icono, titulo, texto }) => (
                            <li key={titulo} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-mei-orange/10 text-mei-orange-text">
                                    <Icono size={24} aria-hidden="true" />
                                </span>
                                <h3 className="font-serif text-2xl font-bold text-mei-navy mb-3">{titulo}</h3>
                                <p className="text-gray-700 leading-relaxed">{texto}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section aria-labelledby="visitanos-titulo" className="px-6 md:px-12 py-20 bg-mei-indigo text-white text-center">
                <h2 id="visitanos-titulo" className="font-serif font-bold text-3xl md:text-4xl mb-4">Te esperamos</h2>
                <p className="text-gray-200 text-lg max-w-xl mx-auto mb-8">
                    Ven a conocernos en cualquiera de nuestros servicios. Hay un lugar para ti y tu familia.
                </p>
                <Link
                    to="/#servicios"
                    className="inline-block rounded-full bg-white px-8 py-4 font-bold text-mei-blue transition-all duration-300 hover:-translate-y-1 hover:bg-mei-gold hover:text-mei-night"
                >
                    Ver horarios de servicios
                </Link>
            </section>
        </>
    );
}

export default About;
