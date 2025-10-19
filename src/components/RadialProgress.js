'use client'

import { useEffect, useState } from "react";

function RadialProgress() {

    const [progreso, setProgreso] = useState(0)


    useEffect(() => {
        if (progreso >= 100) return;

        const timer = setInterval(() => {
            setProgreso((prev) => prev + 1);
        }, 20);


        return () => clearInterval(timer);
    }, [progreso]);

    return (
        <div className="radial-progress text-blue-500" style={{ "--value": progreso }}
            aria-valuenow={progreso} role="progressbar">{progreso}%</div>

    );
}

export default RadialProgress;
