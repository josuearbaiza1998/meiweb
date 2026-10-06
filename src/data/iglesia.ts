// Datos generales de la iglesia que se usan en varias partes del sitio
// (pie de página, contacto, peticiones de oración).
// Revisa y corrige estos datos antes de publicar: algunos se tomaron del
// sitio anterior (ministeriosemanuel.net) y pueden estar desactualizados.

export const IGLESIA = {
    nombre: 'Ministerios Emanuel Internacional',
    nombreCorto: 'MEI',
    templo: 'TaberMEI Central',
    direccion: 'Boulevard Emanuel, Barrio El Calvario',
    ciudad: 'Santa Rosa de Lima, La Unión, El Salvador',
    telefono: '+503 2665-5700',
    telefonoHref: 'tel:+50326655700',
    correo: 'info@ministeriosemanuel.net',
    correoOracion: 'info@ministeriosemanuel.net',
    mapaEmbed:
        'https://www.google.com/maps?q=Ministerios+Emanuel+Internacional,+Santa+Rosa+de+Lima,+La+Uni%C3%B3n,+El+Salvador&output=embed',
    mapaEnlace:
        'https://www.google.com/maps/search/?api=1&query=Ministerios+Emanuel+Internacional+Santa+Rosa+de+Lima+La+Uni%C3%B3n',
    redes: {
        facebook: 'https://www.facebook.com/tabermei',
        instagram: 'https://www.instagram.com/tabermei/',
        youtube: 'https://www.youtube.com/@ministeriosemanuelinternac33/streams',
    },
} as const;

export const HORARIOS = [
    { dia: 'Martes', nombre: 'Servicio de Oración', hora: '5:30 pm' },
    { dia: 'Jueves', nombre: 'Formación Bíblica', hora: '5:30 pm' },
    { dia: 'Domingo', nombre: 'Servicios Dominicales', hora: '6:00 am y 10:00 am' },
] as const;

/**
 * Canal de YouTube de la iglesia, usado por la sección de servicio en vivo.
 * `canalId` es el identificador del canal (empieza con UC). Verifícalo si
 * alguna vez cambia de canal.
 */
export const YOUTUBE = {
    canalId: 'UC2-t8oaNCHmXIfGaqy8aLVA',
    /**
     * Clave de la API de YouTube. Se configura como variable de entorno
     * VITE_YOUTUBE_API_KEY (en Vercel: Settings > Environment Variables).
     * Sin clave, la sección de "en vivo" simplemente no aparece.
     */
    apiKey: import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined,
} as const;
