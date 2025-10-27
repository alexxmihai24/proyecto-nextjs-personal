'use client'
import { useEffect, useState } from "react";
// import Reloj from "./reloj"; // Mantenemos esta línea comentada por si la necesitas

// Función auxiliar para formatear la hora (ej: 09:05:01)
const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
};

function Page2() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const i1 = setInterval(() => {
            const now = new Date();
            setHora(now);
            // Actualiza el título de la página con la hora
            document.title = now.toLocaleTimeString(); 
        }, 1000);

        return () => clearInterval(i1);
    }, []);

    // Obtenemos la fecha y el día de la semana
    // Eliminamos 'capitalize' de las opciones de idioma, usaremos la clase de Tailwind
    const fecha = hora.toLocaleDateString('es-ES', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });

    return (
        // Contenedor principal: Centrado y con fondo degradado suave
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
             style={{ 
                 backgroundImage: 'radial-gradient(circle, #fafafa, #f0f0f0)',
                 minHeight: '100vh' // Asegura que cubra toda la altura
             }}>

            {/* Tarjeta de estilo retro (Card de DaisyUI) */}
            <div className="card w-96 max-w-lg shadow-2xl bg-base-100/90 backdrop-blur-sm 
                            transform transition duration-500 hover:scale-[1.03] 
                            border-4 border-secondary/50 rounded-3xl p-8">
                
                <div className="card-body p-0 items-center text-center">
                    
                    {/* Título y Marco Superior */}
                    <div className="badge badge-lg badge-secondary text-base-100 font-bold mb-4 px-6 py-3 shadow-md">
                        HORA UNIVERSAL
                    </div>

                    {/* RELOJ DIGITAL GRANDE con fuente mono y color de diseño */}
                    <p className={`text-center text-5xl md:text-6xl font-mono tracking-wider 
                                   text-secondary transition-colors duration-500 
                                   p-4 rounded-lg bg-base-200/50 shadow-inner w-full px-6`}>
                        {formatTime(hora)}
                    </p>

                    {/* Fecha completa - Elemento extra */}
                    <p className="text-sm md:text-base font-light mt-4 text-base-content/80 capitalize">
                        {/* Se asegura que solo la primera letra del día se capitalice */}
                        {fecha.charAt(0).toUpperCase() + fecha.slice(1)}
                    </p>
                    
                    {/* Elemento decorativo extra: Símbolo de temperatura o ubicación */}
                    <div className="mt-5 text-xl text-primary/80 flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.727A8 8 0 016.343 5.273A8.001 8.001 0 0117.657 16.727zm0 0l-1.414 1.414m1.414-1.414L21 12m-2.828 4.273L12 21.01m0 0V12" />
                        </svg>
                        <span>Zona Horaria Local</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Page2;
