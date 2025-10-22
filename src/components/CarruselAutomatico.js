'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
];

const CarruselAutomatico = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden w-full h-96 border border-black rounded-box relative">
            <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${images.length * 100}%`
                }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 h-full"
                    >
                        <Image
                            src={img}
                            alt={`Imagen ${index + 1}`}
                            className="h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarruselAutomatico;
