// src/app/page1/page.js 

// IMPORTANTE: Eliminamos cualquier importación de MyDatePicker si existía.

function MiGaleriaDeProyectos() {
    
    // --- Configuración de 4 destinos de Rumanía para la galería ---
    const proyectos = [
        { 
            id: 1, 
            titulo: "Castillo de Bran (Transilvania)", 
            descripcion: "La legendaria fortaleza medieval asociada al mito de Drácula. Un viaje ineludible a la historia gótica.", 
            foto: "/img8.jpg" 
        },
        { 
            id: 2, 
            titulo: "Carretera Transfăgărășan", 
            descripcion: "La espectacular ruta de montaña a través de los Cárpatos. Perfecta para viajes en coche con vistas panorámicas.", 
            foto: "/img12.jpg" 
        },
        { 
            id: 3, 
            titulo: "Bucarest: El Corazón Urbano", 
            descripcion: "Descubre la capital, su monumental Palacio del Parlamento y la arquitectura que le valió el apodo 'La Pequeña París'.", 
            foto: "/imgg1.jpg" 
        },
        { 
            id: 4, 
            titulo: "El Delta del Danubio", 
            descripcion: "Reserva natural protegida, hogar de miles de especies de aves. Ideal para safaris acuáticos y ecoturismo.", 
            foto: "/img11.jpeg" 
        },
    ];

    return (
        // Contenedor principal con espaciado y fondo de DaisyUI
        <div className="p-10 min-h-screen bg-base-200">
            
            {/* Contenido de texto personalizado */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-primary mb-3">
                    Destinos Clave de Rumanía
                </h1>
                <p className="text-lg text-neutral-content">
                    Explora los lugares más emblemáticos de los Cárpatos a la costa del Mar Negro.
                </p>
            </header>
            
            {/* Contenedor Grid de Tailwind: 4 columnas en desktop, 2 en tablet, 1 en móvil */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {proyectos.map(p => (
                    // Componente Card de DaisyUI
                    <div key={p.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <figure className="h-40 overflow-hidden">
                            {/* RUTA CORREGIDA: Usando p.foto que es /imgX.jpg */}
                            <img 
                                src={p.foto} 
                                alt={p.titulo} 
                                className="w-full h-full object-cover" 
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-xl">{p.titulo}</h2>
                            <p className="text-sm">{p.descripcion}</p>
                            <div className="card-actions justify-end mt-2">
                                {/* Botón que modificaremos en el COMMIT 2 */}
                                <button className="btn btn-sm btn-neutral">Ver Viaje</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            
            <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">
                  
                </p>
            </div>
        </div>
    );
}

export default MiGaleriaDeProyectos;
