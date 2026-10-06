# Sitio web de Ministerios Emanuel Internacional (MEI)

Sitio oficial de **Ministerios Emanuel Internacional**, una iglesia evangélica en Santa Rosa de Lima, La Unión, El Salvador. Su propósito es ser un espacio acogedor para la congregación y para quienes nos visitan por primera vez: horarios de servicios, ministerios, eventos, peticiones de oración y contacto.

## Tecnologías

- [React 19](https://react.dev/) con TypeScript
- [Vite](https://vite.dev/) para desarrollo y compilación
- [Tailwind CSS 4](https://tailwindcss.com/) para estilos
- [Framer Motion](https://motion.dev/) para animaciones (respeta la preferencia de "reducir movimiento")
- [React Router](https://reactrouter.com/) para las páginas
- [Lucide](https://lucide.dev/) para íconos

## Cómo correrlo en tu computadora

Necesitas [Node.js](https://nodejs.org/) 20 o más reciente.

```bash
npm install      # instala las dependencias
npm run dev      # abre el sitio en http://localhost:5173
npm run build    # genera la versión final en la carpeta dist/
npm run lint     # revisa el código
```

## Estructura

```
src/
├── data/                 # Contenido editable sin tocar el diseño
│   ├── iglesia.ts        # Dirección, teléfono, correo, redes y horarios
│   ├── servicios.ts      # Servicios semanales y su página de detalles
│   ├── ministerios.ts    # Ministerios (Escuela Dominical, Servidores, Radio, Canal)
│   └── eventos.ts        # Agenda de eventos del calendario
├── components/
│   ├── layout/           # Barra de navegación, pie de página y estructura general
│   ├── sections/         # Secciones de la página de inicio
│   └── ui/               # Piezas reutilizables (tarjetas, calendario, encabezados)
├── pages/                # Inicio, Acerca de, detalle de servicio y página 404
└── assets/images/        # Imágenes en formato WebP
```

## Cómo actualizar el contenido

- **Eventos:** edita `src/data/eventos.ts`. Cada fecha (`"AAAA-MM-DD"`) tiene una lista de eventos. El calendario abre solo en el próximo evento.
- **Datos de contacto y redes:** edita `src/data/iglesia.ts`. Se usan en el pie de página, contacto y oración.
- **Servicios y ministerios:** edita `src/data/servicios.ts` y `src/data/ministerios.ts`.
- **Canal de YouTube:** `YOUTUBE.canalId` en `src/data/iglesia.ts`.
- **Historia:** está en `src/pages/About.tsx`.
- **Imágenes nuevas:** usa formato WebP de máximo ~1600 px de ancho para que el sitio cargue rápido.

## Servicio en vivo de YouTube

Entre el hero y "Nuestros Servicios" hay una sección que aparece **solo cuando el canal está transmitiendo en vivo**; el resto del tiempo no se dibuja.

Para que funcione hace falta una clave de la API de YouTube:

1. Entra a [Google Cloud Console](https://console.cloud.google.com/), crea un proyecto y activa **YouTube Data API v3**.
2. Crea una clave de API y restríngela por referente HTTP al dominio del sitio (la clave queda visible en el navegador, por eso la restricción importa).
3. En Vercel, ve a **Settings > Environment Variables** y agrega `VITE_YOUTUBE_API_KEY` con esa clave. Para desarrollo local, ponla en un archivo `.env.local`.

Sin la clave el sitio funciona igual, solo que la sección de "en vivo" nunca aparece. El identificador del canal está en `src/data/iglesia.ts` (`YOUTUBE.canalId`).

Cada visita hace dos consultas (2 unidades de cuota), muy por debajo del límite diario gratuito de 10 000, y vuelve a revisar cada 5 minutos mientras la página esté abierta.

## Formularios

Los formularios de oración y contacto todavía no tienen un servidor: al enviarlos se abre la aplicación de correo de la persona con el mensaje listo para el correo configurado en `src/data/iglesia.ts`. Más adelante se pueden conectar a un servicio como Formspree o a un servidor propio.

## Accesibilidad

El sitio busca cumplir las pautas WCAG 2.1 AA: idioma español declarado, enlace para saltar al contenido, menú usable con teclado y en celular, textos alternativos, contraste suficiente, calendario que anuncia la fecha completa y animaciones que se detienen si la persona prefiere reducir el movimiento.

## Publicación

El archivo `vercel.json` permite publicar el sitio en [Vercel](https://vercel.com/) conectando este repositorio; cada pull request recibe su propio enlace de vista previa.
