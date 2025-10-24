i// src/app/page1/page.js 

// IMPORTANTE: Eliminamos cualquier importación de MyDatePicker si existía.

function MiGaleriaDeProyectos() {
    
    // --- Configuración de tus 4 proyectos con el nombre CORRECTO de las fotos ---
    const proyectos = [
        { id: 1, titulo: "Proyecto 1: Diseño Web", descripcion: "Mi aplicación personal Full-Stack implementada con Next.js y Tailwind.", foto: "/img1.jpg" },
        { id: 2, titulo: "Proyecto 2: React Componentes", descripcion: "Uso de componentes de estado de React para la gestión de datos dinámica.", foto: "/img2.jpg" },
        { id: 3, titulo: "Proyecto 3: Tailwind Grid", descripcion: "Demostración de diseño responsivo con la clase Grid y utilidades de espaciado.", foto: "/img3.jpg" },
        { id: 4, titulo: "Proyecto 4: DaisyUI Integración", descripcion: "Implementación del componente 'Drawer' y clases de utilería de DaisyUI.", foto: "/img4.jpg" },
    ];

    return (
        // Contenedor principal con espaciado y fondo de DaisyUI
        <div className="p-10 min-h-screen bg-base-200">
            
            {/* Contenido de texto personalizado */}
            <header className="text-center mb-10">
                <h1 className="text-5xl font-extrabold text-primary mb-3">
                    Portafolio de Proyectos de Alex
                </h1>
                <p className="text-lg text-neutral-content">
                    Estas son 4 implementaciones clave. El resto de las páginas del proyecto original permanecen intactas.
                </p>
            </header>
            
            {/* Contenedor Grid de Tailwind: 4 columnas en desktop, 2 en tablet, 1 en móvil */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {proyectos.map(p => (
                    // Componente Card de DaisyUI
                    <div key={p.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <figure className="h-40 overflow-hidden">
                            {/* RUTA CORREGIDA: Usando p.foto que ahora es /imgX.jpg */}
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
                                <button className="btn btn-sm btn-neutral">Más Info</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            
            <div className="mt-10 text-center">
                <p className="text-sm text-gray-500">
                    Trabajo de DWEC. Hoy: Commit 1 (Contenido).
                </p>
            </div>
        </div>
    );
}

export default MiGaleriaDeProyectos;