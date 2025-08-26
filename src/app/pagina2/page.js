'use client'
import { useEffect, useState } from "react";
import Reloj from "./reloj";



function Page2() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const i1 = setInterval(() => {
            setHora(new Date());
            document.title = new Date().toLocaleTimeString();
        }, 1000);


        return () => clearInterval(i1);
    }, []);

    return (
        <div>
            <h2>Hora actual:</h2>
            <p className="text-center text-9xl font-mono">{hora.toLocaleTimeString()}</p>
        </div>
    );


    // return (
    //     <Reloj />
    // );

}

export default Page2;


