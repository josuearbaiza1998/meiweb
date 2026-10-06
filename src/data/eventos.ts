// Agenda de eventos.
// Para agregar un evento, crea una entrada con la fecha en formato
// "AAAA-MM-DD" y agrega el evento a su lista. Los eventos de abajo son
// de muestra: reemplázalos por los eventos reales de la iglesia.

export interface Evento {
    id: number;
    titulo: string;
    categoria: string;
    hora: string;
    lugar: string;
    descripcion: string;
    imagen: string;
}

export type AgendaEventos = Record<string, Evento[]>;

export const EVENTOS: AgendaEventos = {
    '2026-10-15': [
        {
            id: 3,
            titulo: 'Jueves de Formación e Instrucción Bíblica',
            categoria: 'Educación',
            hora: '5:30 PM',
            lugar: 'TaberMEI Central - Auditorio',
            descripcion:
                'Seguimos creciendo en el conocimiento de la Palabra. Un espacio diseñado para discipular y desarrollar los dones en cada miembro.',
            imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ],
    '2026-10-30': [
        {
            id: 4,
            titulo: 'Vigilia de Adoración y Oración',
            categoria: 'Culto',
            hora: '6:00 PM',
            lugar: 'TaberMEI Central',
            descripcion:
                'Una noche de clamor, alabanza y búsqueda espiritual con salmistas invitados. Ven con fe a depositar tus peticiones ante el altar.',
            imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ],
    '2026-11-01': [
        {
            id: 2,
            titulo: 'Escuela de Líderes',
            categoria: 'Educación',
            hora: '8:30 AM',
            lugar: 'TaberMEI Central',
            descripcion:
                'Clases formativas para todas las edades. Aprendiendo juntos la Palabra de Dios con herramientas prácticas para la vida diaria.',
            imagen: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            id: 1,
            titulo: 'Palabra Profética, Primicias y Ayuno',
            categoria: 'Culto Especial',
            hora: '10:00 AM',
            lugar: 'TaberMEI Central',
            descripcion:
                'Únete a nosotros en un tiempo especial de consagración, primicias y alabanza para iniciar el mes bajo la dirección del Espíritu Santo.',
            imagen: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ],
};

/** Clave AAAA-MM-DD de una fecha en hora local. */
export function claveFecha(fecha: Date): string {
    return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
}

/** Fecha con eventos más cercana a hoy (o la última, si todas pasaron). */
export function proximaFechaConEventos(eventos: AgendaEventos): string | undefined {
    const fechas = Object.keys(eventos).sort();
    const hoy = claveFecha(new Date());
    return fechas.find((f) => f >= hoy) ?? fechas[fechas.length - 1];
}
