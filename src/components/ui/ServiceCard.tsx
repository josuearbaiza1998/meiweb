import { Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    image: string;
    title: string;
    description: string;
    time: string;
    location: string;
    to: string;
    delay?: number;
}

export default function ServiceCard({ image, title, description, time, location, to, delay = 0 }: ServiceCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
        >
            <div className="overflow-hidden">
                <img
                    className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105"
                    src={image}
                    alt=""
                    loading="lazy"
                    width={1200}
                    height={1200}
                />
            </div>

            <div className="flex flex-col flex-grow p-6 md:p-8">
                <h3 className="text-2xl font-serif font-bold text-mei-night mb-3">
                    {title}
                </h3>
                <p className="text-base text-gray-600 mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 gap-3 mb-8">
                    <span className="flex items-center gap-2 font-medium">
                        <Clock size={18} className="text-mei-orange" aria-hidden="true" />
                        <span className="sr-only">Horario:</span> {time}
                    </span>
                    <span className="flex items-center gap-2 font-medium">
                        <MapPin size={18} className="text-mei-orange" aria-hidden="true" />
                        <span className="sr-only">Lugar:</span> {location}
                    </span>
                </div>

                <Link
                    to={to}
                    className="inline-flex justify-center items-center px-6 py-3 text-sm font-bold text-white bg-mei-blue rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-mei-night hover:shadow-[0_10px_20px_rgba(0,74,173,0.2)]"
                >
                    Ver más detalles<span className="sr-only"> de {title}</span>
                </Link>
            </div>
        </motion.article>
    );
}
