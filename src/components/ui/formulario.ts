// Utilidades compartidas por los formularios de oración y contacto.

export const estilosEtiqueta = 'block text-sm font-bold text-mei-navy mb-2';

export const estilosCampo =
    'w-full rounded-xl border border-slate-400 bg-white px-4 py-3 text-base text-mei-navy shadow-sm transition-colors focus:border-mei-blue focus:outline-none focus:ring-2 focus:ring-mei-blue/30';

/**
 * Abre la aplicación de correo de la persona con el mensaje listo.
 * Mientras el sitio no tenga un servidor, esta es la forma de enviar los formularios.
 */
export function abrirCorreo(destino: string, asunto: string, lineas: string[]) {
    const cuerpo = lineas.join('\n');
    window.location.href = `mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
}
