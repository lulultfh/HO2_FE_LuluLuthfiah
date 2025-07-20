"use client";
import { useState } from "react";
import { useParams } from 'next/navigation';

export default function TicTacToe() {
  const params = useParams();
  const gameMode = params.mode;

  const [gameActive, setGameActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameState, setGameState] = useState<string[]>(Array(9).fill(""));
  const [statusMessage, setStatusMessage] = useState<string>("It's X's turn!");

  const winningConditions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleCellClick = (index: number) => {
    if (!gameActive || gameState[index] !== "") return;
    const newGameState = [...gameState];
    newGameState[index] = currentPlayer;
    setGameState(newGameState);

    if (checkWinner(newGameState)) {
      setStatusMessage(`Player ${currentPlayer} has won!`);
      setGameActive(false);
    } else if (newGameState.every((cell) => cell !== "")) {
      setStatusMessage("Game ended in a draw!");
      setGameActive(false);
    } else {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
      setStatusMessage(`It's ${nextPlayer}'s turn!`);
    }
  };

  const checkWinner = (state: string[]) => {
    return winningConditions.some(([a, b, c]) => {
      return state[a] && state[a] === state[b] && state[b] === state[c];
    });
  };

  const handleRestartGame = () => {
    setGameState(Array(9).fill(""));
    setCurrentPlayer("X");
    setGameActive(true);
    setStatusMessage("It's X's turn!");
  };

  return (
      <main className="flex flex-col items-center mt-24 gap-6 bg-[#F3F3E0] border border-[#CBDCEB] rounded-lg p-8 mx-auto w-fit shadow-md">
        <h1 className="text-3xl font-bold text-[#133E87]">A-ing Tic Tac Toe!</h1>
        <div className="grid grid-cols-3 gap-2 w-48 h-48">
          {gameState.map((cell, index) => (
            <div
              key={index}
              className="cell border border-[#CBDCEB] bg-[#CBDCEB] flex items-center justify-center text-xl cursor-pointer text-[#133E87] font-semibold"
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          ))}
        </div>
        <h3 className="text-lg text-[#133E87]">{statusMessage}</h3>
        <button
          onClick={handleRestartGame}
          className="bg-[#133E87] hover:bg-[#608BC1] text-white px-4 py-2 rounded"
        >
          Restart Game
        </button>
      </main>
    
  );
}
