'use client'


import React, { useEffect } from "react" 
import Glide from "@glidejs/glide"

export default function CarouselCard() {
    useEffect(() => {
        const slider = new Glide(".glide-06", {
            type: "carousel",
            focusAt: "center",
            perView: 3,
            autoplay: 3000, // Aumentado ligeramente para mejor lectura
            animationDuration: 500,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-primary", // Usamos color primario de DaisyUI
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])

    // --- Datos de los slides con URLs de Imágenes Locales (public folder) ---
    // Las imágenes se referencian directamente desde la carpeta /public
    const slides = [
       
        {
            title: "",
            description: "", // Descripción vacía
            // Imagen local
            url: "/img7.jpg"
        },
        {
            title: "",
            description: "", // Descripción vacía
            // Imagen local
            url: "/img8.jpg" 
        },
        {
            title: "",
            description: "", // Descripción vacía
            // Imagen local
            url: "/img9.jpg"
        },
        {
            title: " git add .",
            description: "", // Descripción vacía
            // Imagen local
            url: "/img10.jpg" 
        },
    ];

    return (
        <>
            {/*<!-- Component: Card Carousel --> */}
            {/* El carrusel ahora tiene una altura fija para contener las imágenes */}
            <div className="glide-06 relative w-full overflow-hidden rounded-xl h-[450px] bg-white shadow-2xl shadow-slate-300 border border-base-200">
                
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden h-full" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 h-full">
                        
                        {slides.map((slide, index) => (
                            <li key={index} className="relative h-full">
                                <div className="h-full w-full">
                                    {/* La imagen es ahora el fondo del slide */}
                                    <img
                                        src={slide.url}
                                        alt={slide.title}
                                        // Clases ajustadas para asegurar que la imagen cubra completamente
                                        className="absolute inset-0 w-full h-full min-h-full object-cover transition duration-300"
                                    />
                                    
                                    {/* Diseñado de fondo: un degradado que sube desde el fondo para hacer el texto legible. */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    
                                    {/* Contenido del Slide: Posicionado en la parte inferior */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <div className="badge badge-lg badge-accent mb-2">Slide {index + 1}</div>
                                        <h2 className="text-3xl font-extrabold leading-tight">{slide.title}</h2>
                                        {/* Solo mostramos la descripción si tiene contenido */}
                                        {slide.description && <p className="text-sm font-light mt-1 text-base-200">{slide.description}</p>}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/*    <!-- Controls (Flechas) --> */}
                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition duration-300 hover:border-white hover:bg-black/60 focus-visible:outline-none"
                        data-glide-dir="<"
                        aria-label="Anterior slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <title>Anterior</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-black/30 text-white transition duration-300 hover:border-white hover:bg-black/60 focus-visible:outline-none"
                        data-glide-dir=">"
                        aria-label="Siguiente slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <title>Siguiente</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </button>
                </div>
                
                {/*    <!-- Indicators (Puntos inferiores) --> */}
                <div
                    className="absolute bottom-2 flex w-full items-center justify-center gap-2 z-10"
                    data-glide-el="controls[nav]"
                >
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className="group p-2"
                            data-glide-dir={`=${index}`}
                            aria-label={`Ir al slide ${index + 1}`}
                        >
                            <span className="block h-2 w-2 rounded-full bg-white/50 ring-1 ring-white transition-colors duration-300 focus:outline-none"></span>
                        </button>
                    ))}
                </div>
            </div>
            {/*<!-- End Card Carousel --> */}
        </>
    )
}
