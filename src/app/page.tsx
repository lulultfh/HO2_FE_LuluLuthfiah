"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const fullText = "Tic-Tac-Toe!";
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        setTimeout(() => {
          currentIndex = 0;
          setText("");
        }, 1000);
        // clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#133E87]">
        Welcome to A-Ing <span>{text}</span>
      </h1>
      <p className="text-[#608BC1]">
        A-ing Tic Tac Toe adalah permainan sederhana berbasis web yang dirancang
        untuk memberikan pengalaman bermain yang menyenangkan dan interaktif.
        Dibangun menggunakan React dan Tailwind CSS, game ini menampilkan
        antarmuka yang bersih dan responsif. Pemain dapat bergantian menempatkan
        simbol X dan O hingga salah satu menang atau permainan berakhir seri.
        Cocok dimainkan untuk mengisi waktu luang sekaligus melatih strategi
        secara ringan.
      </p>
      <button
        className="bg-[#133E87] mt-6 text-white px-6 py-2 rounded hover:bg-[#0f2e65] transition"
        onClick={() => (window.location.href = "/main")}
      >
        🎮Coba Sekarang
      </button>
    </section>
  );
}
