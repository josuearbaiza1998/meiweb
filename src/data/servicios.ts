import martes from '../assets/images/martes.webp';
import jueves from '../assets/images/jueves.webp';
import domingo from '../assets/images/domingo.webp';

export interface Servicio {
    slug: string;
    imagen: string;
    titulo: string;
    dia: string;
    resumen: string;
    hora: string;
    lugar: string;
    descripcion: string[];
    queEsperar: string[];
    versiculo: { texto: string; cita: string };
}

// Textos de borrador: la iglesia puede ajustarlos libremente.
export const SERVICIOS: Servicio[] = [
    {
        slug: 'martes-de-oracion',
        imagen: martes,
        titulo: 'Martes de Oración',
        dia: 'Martes',
        resumen:
            'La oración abre caminos, fortalece la fe y nos acerca más a Dios. Te esperamos los días martes en nuestro Servicio de Oración.',
        hora: '5:30 pm',
        lugar: 'TaberMEI Central',
        descripcion: [
            'Cada martes nos reunimos como iglesia para buscar el rostro de Dios en oración. Es un tiempo para presentar nuestras necesidades, interceder por nuestras familias, por la congregación y por nuestra nación.',
            'No necesitas experiencia ni palabras especiales para orar. Ven tal como estás: aquí encontrarás hermanos que oran contigo y por ti.',
        ],
        queEsperar: [
            'Un tiempo de alabanza y adoración para preparar el corazón.',
            'Oración congregacional y en grupos pequeños.',
            'Espacio para presentar peticiones personales y familiares.',
            'Una palabra breve de aliento basada en las Escrituras.',
        ],
        versiculo: {
            texto: 'Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.',
            cita: 'Jeremías 33:3',
        },
    },
    {
        slug: 'jueves-de-formacion-biblica',
        imagen: jueves,
        titulo: 'Jueves de Formación Bíblica',
        dia: 'Jueves',
        resumen:
            'Seguimos creciendo en el conocimiento de la Palabra. Te esperamos los días jueves de Formación e Instrucción Bíblica.',
        hora: '5:30 pm',
        lugar: 'TaberMEI Central',
        descripcion: [
            'Los jueves son noches de enseñanza. Estudiamos la Biblia de forma ordenada para conocer mejor a Dios, afirmar nuestra fe y aplicar su Palabra a la vida diaria.',
            'Este servicio forma parte de nuestra visión de discipular a cada miembro y desarrollar en él los dones y ministerios que Dios le ha dado.',
        ],
        queEsperar: [
            'Enseñanza bíblica práctica y fácil de seguir.',
            'Temas de crecimiento espiritual, familia y servicio.',
            'Oportunidad de hacer preguntas y profundizar.',
            'Trae tu Biblia y algo para tomar notas.',
        ],
        versiculo: {
            texto: 'Lámpara es a mis pies tu palabra, y lumbrera a mi camino.',
            cita: 'Salmo 119:105',
        },
    },
    {
        slug: 'servicios-dominicales',
        imagen: domingo,
        titulo: 'Servicios Dominicales',
        dia: 'Domingo',
        resumen:
            'El domingo es del Señor. Reunámonos como iglesia para exaltarle en nuestros servicios.',
        hora: '6:00 am y 10:00 am',
        lugar: 'TaberMEI Central',
        descripcion: [
            'El domingo es nuestro día de celebración. Toda la familia se reúne para adorar a Dios, escuchar su Palabra y compartir como iglesia.',
            'Tenemos dos servicios para que elijas el horario que mejor se adapte a tu familia. Si es tu primera vez, nuestro equipo de servidores te recibirá con gusto en la entrada.',
        ],
        queEsperar: [
            'Alabanza y adoración congregacional.',
            'Predicación de la Palabra de Dios.',
            'Escuela Dominical para niños y jóvenes.',
            'Un ambiente familiar donde eres bienvenido.',
        ],
        versiculo: {
            texto: 'Yo me alegré con los que me decían: A la casa de Jehová iremos.',
            cita: 'Salmo 122:1',
        },
    },
];
