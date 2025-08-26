// components/CountDown.js
"use client";

import { useEffect, useState } from "react";

export default function CountDown({ from = 59 }) {
    const [counter, setCounter] = useState(from);

    useEffect(() => {
        if (counter <= 0) return;

        const timer = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [counter]);

    return (
        <span className="countdown text-4xl">
            <span
                style={{ "--value": counter }}
                aria-live="polite"
                aria-label={`Contador: ${counter}`}
            >
                {counter}
            </span>
        </span>
    );
}
