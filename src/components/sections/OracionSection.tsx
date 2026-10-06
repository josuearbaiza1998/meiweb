import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Send } from 'lucide-react';
import { IGLESIA } from '../../data/iglesia';
import EncabezadoSeccion from '../ui/EncabezadoSeccion';
import { abrirCorreo, estilosCampo, estilosEtiqueta } from '../ui/formulario';

export default function OracionSection() {
    const [enviado, setEnviado] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const datos = new FormData(e.currentTarget);
        const nombre = String(datos.get('nombre') || '').trim() || 'Anónimo';
        const confidencial = datos.get('confidencial') === 'on';

        // Por ahora la petición se envía por correo desde el dispositivo de la persona.
        abrirCorreo(IGLESIA.correoOracion, `Petición de oración${confidencial ? ' (confidencial)' : ''}`, [
            `Nombre: ${nombre}`,
            `Teléfono o correo: ${String(datos.get('contacto') || '').trim() || 'No indicado'}`,
            `Confidencial: ${confidencial ? 'Sí, solo para el equipo pastoral' : 'No'}`,
            '',
            String(datos.get('peticion') || '').trim(),
        ]);
        setEnviado(true);
    };

    return (
        <section
            id="oracion"
            aria-labelledby="oracion-titulo"
            className="relative w-full py-20 lg:py-32 px-6 md:px-12 bg-white overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto w-full">
                <EncabezadoSeccion
                    id="oracion-titulo"
                    antetitulo="Estamos para ti"
                    titulo="Peticiones de Oración"
                    descripcion="No tienes que cargarlo solo. Cuéntanos por qué podemos orar y nuestro equipo de intercesión orará por ti."
                />

                <div className="grid gap-10 lg:grid-cols-5 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-2 rounded-2xl bg-mei-indigo text-white p-8 md:p-10"
                    >
                        <HeartHandshake size={44} className="text-mei-gold mb-6" aria-hidden="true" />
                        <blockquote className="font-serif text-2xl leading-snug mb-4">
                            “La oración eficaz del justo puede mucho.”
                        </blockquote>
                        <p className="text-mei-gold font-semibold mb-8">Santiago 5:16</p>
                        <p className="text-gray-200 leading-relaxed">
                            Cada martes a las 5:30 pm nos reunimos para orar. Tu petición será presentada con amor y respeto.
                            Si lo prefieres, puedes marcarla como confidencial y solo la verá el equipo pastoral.
                        </p>
                    </motion.div>

                    <motion.form
                        onSubmit={onSubmit}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-3 rounded-2xl border border-slate-200 bg-[#F3F6FA] p-6 md:p-10 grid gap-5"
                        aria-describedby="oracion-nota"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="oracion-nombre" className={estilosEtiqueta}>
                                    Nombre <span className="font-normal text-gray-600">(opcional)</span>
                                </label>
                                <input id="oracion-nombre" name="nombre" type="text" autoComplete="name" className={estilosCampo} />
                            </div>
                            <div>
                                <label htmlFor="oracion-contacto" className={estilosEtiqueta}>
                                    Teléfono o correo <span className="font-normal text-gray-600">(opcional)</span>
                                </label>
                                <input id="oracion-contacto" name="contacto" type="text" autoComplete="email" className={estilosCampo} />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="oracion-peticion" className={estilosEtiqueta}>
                                Tu petición <span className="font-normal text-gray-600">(obligatorio)</span>
                            </label>
                            <textarea id="oracion-peticion" name="peticion" required rows={5} className={estilosCampo} />
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                id="oracion-confidencial"
                                name="confidencial"
                                type="checkbox"
                                className="mt-1 h-5 w-5 rounded border-slate-400 accent-mei-blue"
                            />
                            <label htmlFor="oracion-confidencial" className="text-sm text-gray-700">
                                Quiero que mi petición sea confidencial (solo para el equipo pastoral).
                            </label>
                        </div>

                        <p id="oracion-nota" className="text-sm text-gray-600">
                            Al enviar se abrirá tu aplicación de correo con la petición lista para mandarla a {IGLESIA.correoOracion}.
                        </p>

                        <button
                            type="submit"
                            className="justify-self-start inline-flex items-center gap-2 rounded-full bg-mei-blue px-8 py-4 text-sm md:text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-mei-night"
                        >
                            <Send size={18} aria-hidden="true" />
                            Enviar petición
                        </button>

                        <p role="status" className="text-sm font-semibold text-green-800">
                            {enviado && 'Gracias por confiar en nosotros. Si tu aplicación de correo no se abrió, escríbenos directamente al correo indicado.'}
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
