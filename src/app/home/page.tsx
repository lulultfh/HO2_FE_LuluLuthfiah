'use-client'

import { useEffect, useState } from "react";

export default function Home(){
    const fullText = 'Tic-Tac-Toe!';
    const [text, setText] = useState('');
    
    return(
        <section className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to A-Ing <span>Tic-Tac-Toe!</span></h1>
        </section>
    )
}