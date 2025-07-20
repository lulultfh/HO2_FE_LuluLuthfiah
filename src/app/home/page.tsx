'use client'

import { useEffect, useState } from "react";

export default function Home(){
    const fullText = 'Tic-Tac-Toe!';
    const [text, setText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(()=> {
            setText(fullText.slice(0, currentIndex + 1));
            currentIndex++;
            if(currentIndex === fullText.length){
                clearInterval(interval);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return(
        <section className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to A-Ing <span>{text}</span></h1>
        </section>
    )
}