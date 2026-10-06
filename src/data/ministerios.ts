import { BookOpen, HandHeart, Radio, Tv, type LucideIcon } from 'lucide-react';
import { IGLESIA } from './iglesia';

export interface Ministerio {
    id: string;
    icono: LucideIcon;
    titulo: string;
    lema?: string;
    descripcion: string;
    detalles: string[];
    enlace?: { texto: string; href: string };
}

// Textos de borrador: la iglesia puede ajustarlos libremente.
export const MINISTERIOS: Ministerio[] = [
    {
        id: 'escuela-dominical',
        icono: BookOpen,
        titulo: 'Escuela Dominical',
        lema: 'Instruye al niño en su camino',
        descripcion:
            'Enseñamos la Palabra de Dios a niños, adolescentes y jóvenes con clases adaptadas a cada edad, para que crezcan conociendo y amando a Jesús.',
        detalles: ['Domingos durante los servicios', 'Clases por edades', 'Maestros capacitados'],
    },
    {
        id: 'servidores',
        icono: HandHeart,
        titulo: 'Servidores',
        lema: 'Servir con amor y excelencia',
        descripcion:
            'Son el equipo que recibe a cada persona con una sonrisa, orienta a los visitantes y cuida el orden del templo para que todos se sientan en casa.',
        detalles: ['Bienvenida y ujieres', 'Orientación a visitantes', 'Apoyo en servicios y eventos'],
    },
    {
        id: 'radio',
        icono: Radio,
        titulo: 'Radio',
        lema: 'La Palabra en cada hogar',
        descripcion:
            'A través de la radio llevamos alabanza, enseñanza y mensajes de esperanza a hogares de la zona oriental y a quienes no pueden asistir al templo.',
        detalles: ['Radio Emanuel 103.7 FM', 'Indicativo YSHC', 'Programas de enseñanza y alabanza'],
    },
    {
        id: 'canal',
        icono: Tv,
        titulo: 'MeiTV',
        descripcion:
            'Transmitimos nuestros servicios y programas para que puedas ser parte de la iglesia desde cualquier lugar del mundo.',
        detalles: ['Servicios en vivo por YouTube', 'Mensajes disponibles en línea'],
        enlace: { texto: 'Ver transmisiones en YouTube', href: IGLESIA.redes.youtube },
    },
];
