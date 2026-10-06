import { useEffect, useState } from 'react';
import { YOUTUBE } from '../data/iglesia';

export interface TransmisionEnVivo {
    videoId: string;
    titulo: string;
}

/** Cada cuánto se vuelve a preguntar si hay transmisión (5 minutos). */
const INTERVALO_MS = 5 * 60 * 1000;

/** La lista de subidas de un canal usa el mismo id con "UU" en lugar de "UC". */
function listaDeSubidas(canalId: string) {
    return `UU${canalId.slice(2)}`;
}

/**
 * Consulta a YouTube si el canal de la iglesia está transmitiendo ahora.
 * Devuelve null mientras no haya transmisión, si falta la clave de la API
 * o si la consulta falla, para que la sección quede oculta.
 *
 * Usa la lista de subidas en vez de search.list porque cuesta mucho menos
 * cuota: 2 unidades por visita en lugar de 100.
 */
export function useTransmisionEnVivo(): TransmisionEnVivo | null {
    const [enVivo, setEnVivo] = useState<TransmisionEnVivo | null>(null);

    useEffect(() => {
        const { apiKey, canalId } = YOUTUBE;
        if (!apiKey) return;

        const controlador = new AbortController();

        const consultar = async () => {
            try {
                const subidas = await fetch(
                    `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=5&playlistId=${listaDeSubidas(canalId)}&key=${apiKey}`,
                    { signal: controlador.signal },
                );
                if (!subidas.ok) return;
                const datosSubidas = await subidas.json();
                const ids: string[] = (datosSubidas.items ?? [])
                    .map((item: { contentDetails?: { videoId?: string } }) => item.contentDetails?.videoId)
                    .filter(Boolean);
                if (ids.length === 0) {
                    setEnVivo(null);
                    return;
                }

                const videos = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids.join(',')}&key=${apiKey}`,
                    { signal: controlador.signal },
                );
                if (!videos.ok) return;
                const datosVideos = await videos.json();
                const vivo = (datosVideos.items ?? []).find(
                    (item: { snippet?: { liveBroadcastContent?: string } }) =>
                        item.snippet?.liveBroadcastContent === 'live',
                );

                setEnVivo(vivo ? { videoId: vivo.id, titulo: vivo.snippet.title } : null);
            } catch {
                // Si YouTube no responde, la sección simplemente no se muestra.
            }
        };

        consultar();
        const temporizador = setInterval(consultar, INTERVALO_MS);
        return () => {
            controlador.abort();
            clearInterval(temporizador);
        };
    }, []);

    return enVivo;
}
