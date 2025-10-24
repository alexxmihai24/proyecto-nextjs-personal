// components/ThemeSelect.js 
"use client";
// ¡LÍNEA ELIMINADA para evitar el error 'ReferenceError: Link is not defined'!
import AutoCarousel from "@/components/AutoCarousel";
import CountDown from "@/components/CountDown";
import Table from "@/components/Table";
import SortedTable from "@/components/SortedTable";
import RadialProgress from "@/components/RadialProgress";

// DATOS PARA TU NUEVA TABLA DE PRECIOS
const planes = [
    { nombre: "Beta", precio: "0€", caracteristicas: ["1 Usuario", "5 Proyectos"], estilo: "bg-base-200" },
    { nombre: "Pro", precio: "59€", caracteristicas: ["Usuarios Ilimitados", "Proyectos Ilimitados"], estilo: "bg-primary text-primary-content shadow-lg" },
    { nombre: "Corp", precio: "99€", caracteristicas: ["Soporte 24/7", "Integración API"], estilo: "bg-base-200" },
];

export default function Home() {
    return (
        <section>
            
            {/* TÍTULO CREATIVO PARA ENCABEZAR LA PÁGINA */}
            <h1 className="text-4xl font-bold text-center text-secondary mb-10">
                Arquitectura: Componentes Clave del Proyecto
            </h1>

            <AutoCarousel />
            
            <br />
            {/* Mantenemos el tooltip original */}
            <div className="tooltip" data-tip="hello world">
                <p className="btn">Hover me</p>
            </div>

            <CountDown />
            <RadialProgress />


            {/* TABS: Aquí es donde la Pestaña 3 cambia de contenido */}
            <div className="tabs tabs-box">
                {/* Pestaña 1 Original */}
                <input type="radio" name="my_tabs" className="tab" aria-label="Tab 1" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <p>Tab content 1</p>
                    <details className="dropdown">
                        <summary className="btn m-1">open or close</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                </div>

                {/* Pestaña 2 Original */}
                <input type="radio" name="my_tabs" className="tab" aria-label="Tab 2" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <p>Tab content 2</p>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1">Click</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>

                {/* PESTAÑA 3: ¡REEMPLAZADA con la tabla de planes! */}
                <input type="radio" name="my_tabs" className="tab" aria-label="Planes de Acceso" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    
                    <h2 className="text-xl font-bold mb-4 text-secondary text-center">
                        Modalidades de Acceso (Uso de Card y Badge) 💳
                    </h2>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        {planes.map((plan, index) => (
                            <div key={index} className={`card w-full md:w-64 shadow-xl border ${plan.estilo}`}>
                                <div className="card-body items-center text-center p-4">
                                    <h2 className="card-title text-2xl font-bold">
                                        {plan.nombre}
                                        {plan.nombre === "Pro" && <div className="badge badge-accent">Popular</div>}
                                    </h2>
                                    <p className="text-4xl font-extrabold my-2">{plan.precio}</p>
                                    
                                    <ul className="list-none space-y-1 text-left mb-4 w-full text-sm">
                                        {plan.caracteristicas.map((carac, i) => (
                                            <li key={i} className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-success mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                {carac}
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    <div className="card-actions w-full">
                                        <button className={`btn btn-sm btn-block ${plan.nombre === "Pro" ? 'btn-secondary' : 'btn-outline'}`}>
                                            Seleccionar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-10 bg-white"></div>

            <SortedTable />
            {/* <Table /> */}

        </section>
    );
}