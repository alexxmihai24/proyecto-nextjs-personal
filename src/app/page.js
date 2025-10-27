"use client";
import { useState } from 'react';


const travelSpots = [
    {
        title: "Castillo de Bran",
        subtitle: "La Leyenda de Drácula",
        description: "Una fortaleza medieval gótica en el corazón de Transilvania, mundialmente famosa por su conexión con el mito de Drácula. ¡Imprescindible para los amantes de la historia y el misterio!",
        image: "/castillodebran.jpg", 
        icon: "castle"
    },
    {
        title: "Carretera Transfagarasan",
        subtitle: "La Ruta Escénica de los Cárpatos",
        description: "Considerada una de las carreteras más hermosas del mundo. Serpentea a través de las montañas Făgăraș, ofreciendo vistas de infarto, especialmente en verano.",
        image: "/carreteraTrans.jpg", 
        icon: "road"
    },
    {
        title: "Bucarest",
        subtitle: "La Pequeña París",
        description: "Descubre la vibrante capital, famosa por su arquitectura del siglo XIX, amplios bulevares y el monumental Palacio del Parlamento.",
        image: "/Buca1.jpg", 
        icon: "city"
    },
];


export default function Home() {
    
   
    const getIcon = (type) => {
        switch (type) {
            case 'castle': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M5 10h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z" /></svg>;
            case 'road': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-2 2m2-2l2 2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19V6l2 2m-2-2l-2 2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17H7M17 14H7M17 11H7" /></svg>;
            case 'city': return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h5" /></svg>;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-base-100">
            {/* Sección HÉROE: Título y Banner */}
            <section 
                className="relative h-screen flex items-center justify-center text-white p-4"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1563811656519-913a89341496?q=80&w=1920&auto=format&fit=crop)', // Paisaje Transilvano / Cárpatos - Esta URL de fondo la mantenemos por ahora.
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed' // Efecto parallax sutil
                }}
            >
                {/* Overlay oscuro para mejor contraste del texto */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                
                <div className="relative text-center max-w-4xl space-y-6">
                    <div className="badge badge-lg badge-outline text-xl font-bold p-3 mb-2 border-2 border-white">
                        Descubre los Cárpatos
                    </div>
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
                        RUMANÍA
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light italic">
                        Donde la historia y la naturaleza se unen.
                    </h2>
                    <a href="/pagina1" className="btn btn-lg btn-secondary text-lg mt-6 shadow-xl hover:scale-105 transition-transform">
                        Explora nuestros tours
                    </a>
                </div>
            </section>

            {/* Sección de Atracciones Principales (Cards) */}
            <section className="py-20 bg-base-100 dark:bg-base-300">
                <h3 className="text-4xl font-bold text-center text-secondary mb-12">
                    Destinos Imprescindibles
                </h3>

                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {travelSpots.map((spot, index) => (
                        <div key={index} className="card bg-base-200 shadow-xl overflow-hidden transform hover:shadow-2xl hover:scale-[1.03] transition duration-300">
                            <figure className="h-56">
                                <img src={spot.image} alt={spot.title} className="w-full h-full object-cover"/>
                            </figure>
                            <div className="card-body p-6">
                                <h4 className="card-title text-2xl mb-1 text-primary">
                                    {spot.title}
                                </h4>
                                <p className="text-sm font-semibold text-accent mb-3 flex items-center">
                                    {getIcon(spot.icon)} {spot.subtitle}
                                </p>
                                <p className="text-base-content text-sm">{spot.description}</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">{spot.details}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Sección CTA Final y Footer Sencillo */}
            <footer className="p-10 bg-base-300 text-base-content text-center">
                <div className="max-w-xl mx-auto">
                    <h4 className="text-2xl font-bold mb-4">¿Listo para tu aventura rumana?</h4>
                    <p className="mb-6">Te ayudamos a planificar el viaje de tu vida a través de los Cárpatos, la historia medieval y la vibrante cultura.</p>
                    <button className="btn btn-secondary btn-wide text-lg">
                        Contáctanos Hoy
                    </button>
                </div>
            </footer>
        </div>
    );
}
