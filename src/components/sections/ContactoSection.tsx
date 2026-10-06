import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { IGLESIA } from '../../data/iglesia';
import EncabezadoSeccion from '../ui/EncabezadoSeccion';
import { abrirCorreo, estilosCampo, estilosEtiqueta } from '../ui/formulario';

const TARJETAS = [
    {
        icono: MapPin,
        titulo: 'Dirección',
        contenido: `${IGLESIA.direccion}, ${IGLESIA.ciudad}`,
        href: IGLESIA.mapaEnlace,
        externo: true,
    },
    { icono: Phone, titulo: 'Teléfono', contenido: IGLESIA.telefono, href: IGLESIA.telefonoHref, externo: false },
    { icono: Mail, titulo: 'Correo', contenido: IGLESIA.correo, href: `mailto:${IGLESIA.correo}`, externo: false },
];

export default function ContactoSection() {
    const [enviado, setEnviado] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const datos = new FormData(e.currentTarget);
        abrirCorreo(IGLESIA.correo, `Mensaje desde el sitio web: ${String(datos.get('asunto') || 'Contacto')}`, [
            `Nombre: ${String(datos.get('nombre') || '').trim()}`,
            `Correo: ${String(datos.get('correo') || '').trim()}`,
            '',
            String(datos.get('mensaje') || '').trim(),
        ]);
        setEnviado(true);
    };

    return (
        <section
            id="contacto"
            aria-labelledby="contacto-titulo"
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-[#FCFBFA] overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto w-full">
                <EncabezadoSeccion
                    id="contacto-titulo"
                    antetitulo="Hablemos"
                    titulo="Contáctanos"
                    descripcion="¿Tienes preguntas, quieres visitarnos o necesitas consejería? Escríbenos y con gusto te atenderemos."
                />

                <div className="grid gap-10 lg:grid-cols-5 items-start">
                    <ul className="lg:col-span-2 grid gap-4">
                        {TARJETAS.map(({ icono: Icono, titulo, contenido, href, externo }) => (
                            <li key={titulo}>
                                <a
                                    href={href}
                                    {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="flex items-start gap-4 rounded-2xl bg-white border border-slate-200 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-mei-orange/50"
                                >
                                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-mei-orange/10 text-mei-orange-text">
                                        <Icono size={24} aria-hidden="true" />
                                    </span>
                                    <span>
                                        <span className="block font-bold text-mei-navy">{titulo}</span>
                                        <span className="block break-words text-gray-700">{contenido}</span>
                                        {externo && <span className="sr-only"> (se abre en otra pestaña)</span>}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <motion.form
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 p-6 md:p-10 grid gap-5"
                        aria-describedby="contacto-nota"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="contacto-nombre" className={estilosEtiqueta}>Nombre</label>
                                <input id="contacto-nombre" name="nombre" type="text" required autoComplete="name" className={estilosCampo} />
                            </div>
                            <div>
                                <label htmlFor="contacto-correo" className={estilosEtiqueta}>Correo electrónico</label>
                                <input id="contacto-correo" name="correo" type="email" required autoComplete="email" className={estilosCampo} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contacto-asunto" className={estilosEtiqueta}>Asunto</label>
                            <select id="contacto-asunto" name="asunto" className={estilosCampo} defaultValue="Quiero visitarlos">
                                <option>Quiero visitarlos</option>
                                <option>Quiero servir en un ministerio</option>
                                <option>Consejería pastoral</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="contacto-mensaje" className={estilosEtiqueta}>Mensaje</label>
                            <textarea id="contacto-mensaje" name="mensaje" required rows={5} className={estilosCampo} />
                        </div>

                        <p id="contacto-nota" className="text-sm text-gray-600">
                            Todos los campos son obligatorios. Al enviar se abrirá tu aplicación de correo con el mensaje listo.
                        </p>

                        <button
                            type="submit"
                            className="justify-self-start inline-flex items-center gap-2 rounded-full bg-mei-orange-text px-8 py-4 text-sm md:text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-mei-orange-dark"
                        >
                            <Send size={18} aria-hidden="true" />
                            Enviar mensaje
                        </button>

                        <p role="status" className="text-sm font-semibold text-green-800">
                            {enviado && '¡Gracias por escribirnos! Si tu aplicación de correo no se abrió, escríbenos directamente al correo indicado.'}
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
