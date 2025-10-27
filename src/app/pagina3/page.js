'use client'
import React, { useState, useMemo, useRef, useEffect } from 'react';

// Constantes para nombres en español
const DAYS_OF_WEEK = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const MONTHS = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Helper para obtener el nombre del mes y el año
const formatMonthYear = (date) => {
    return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

function Page3() {
    const today = useMemo(() => new Date(), []);
    const [selectedDate, setSelectedDate] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const [isOpen, setIsOpen] = useState(false);
    
    // Referencia para cerrar el calendario al hacer clic fuera
    const dropdownRef = useRef(null);

    // Cierra el selector si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);


    // Genera la cuadrícula de días para el mes actual
    const days = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // Calcular el desplazamiento inicial (0=Lun, 6=Dom)
        let startingDay = firstDayOfMonth.getDay();
        startingDay = (startingDay === 0) ? 6 : startingDay - 1; 

        const calendarDays = Array(startingDay).fill(null);

        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(new Date(year, month, i));
        }
        return calendarDays;
    }, [currentMonth]);
    
    // Maneja la selección de una fecha
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
        setIsOpen(false); // Cierra al seleccionar
    };

    // Navegación de mes
    const goToPreviousMonth = () => {
        setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    };

    // Formato de visualización en la caja de texto
    const displayDate = selectedDate.toLocaleDateString('es-ES', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });


    // Determina si una fecha es el día de hoy
    const isToday = (date) => {
        return date && date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    };

    // Determina si una fecha es la fecha seleccionada
    const isSelected = (date) => {
        return date && date.getDate() === selectedDate.getDate() &&
               date.getMonth() === selectedDate.getMonth() &&
               date.getFullYear() === selectedDate.getFullYear();
    };

    return (
        // Contenedor que centra el componente de fecha
        // Fondo: Degradado de índigo a rosa (br) para un efecto moderno.
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 p-4">
            <div ref={dropdownRef} className="relative w-full max-w-xs">
                {/* Input Field con Icono */}
                <div className="form-control" onClick={() => setIsOpen(!isOpen)}>
                    <label className="label">
                        <span className="label-text text-lg font-semibold text-indigo-600 dark:text-indigo-400">Seleccionar Fecha</span>
                    </label>
                    <div className="input input-bordered w-full flex items-center justify-between cursor-pointer shadow-xl bg-white dark:bg-gray-700 dark:border-gray-600">
                        <span className="text-base font-medium text-gray-700 dark:text-gray-200">{displayDate}</span>
                        {/* Icono de Calendario */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 14h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>

                {/* Dropdown del Calendario */}
                {isOpen && (
                    <div className="absolute z-10 top-full mt-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full animate-fade-in">
                        
                        {/* Encabezado de Mes y Navegación */}
                        <div className="flex justify-between items-center mb-4 text-indigo-600 dark:text-indigo-400 font-bold">
                            <button onClick={goToPreviousMonth} className="btn btn-sm btn-ghost btn-circle hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <h3 className="text-lg uppercase text-gray-800 dark:text-gray-100">{formatMonthYear(currentMonth)}</h3>
                            <button onClick={goToNextMonth} className="btn btn-sm btn-ghost btn-circle hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* Días de la semana */}
                        <div className="grid grid-cols-7 text-xs font-semibold text-center text-gray-500 mb-2">
                            {DAYS_OF_WEEK.map(day => (
                                <div key={day} className="py-1">{day}</div>
                            ))}
                        </div>

                        {/* Cuadrícula de Días */}
                        <div className="grid grid-cols-7 gap-1 text-sm">
                            {days.map((day, index) => {
                                if (!day) {
                                    return <div key={`empty-${index}`}></div>;
                                }

                                const commonClasses = "w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition duration-150 text-gray-700 dark:text-gray-300";
                                let specificClasses = commonClasses;

                                if (isToday(day)) {
                                    specificClasses = `${commonClasses} border-2 border-indigo-500 dark:border-indigo-400 font-bold`;
                                }
                                
                                if (isSelected(day)) {
                                    specificClasses = `${commonClasses} bg-pink-500 text-white font-bold shadow-lg hover:bg-pink-600`;
                                } else {
                                    specificClasses = `${specificClasses} hover:bg-gray-100 dark:hover:bg-gray-700`;
                                }

                                return (
                                    <div key={day.toISOString()} className="text-center">
                                        <button 
                                            onClick={() => handleDateSelect(day)} 
                                            className={specificClasses}>
                                            {day.getDate()}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                
                {/* Animación custom para el dropdown */}
                <style jsx>{`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(-10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in {
                        animation: fadeIn 0.2s ease-out forwards;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default Page3;