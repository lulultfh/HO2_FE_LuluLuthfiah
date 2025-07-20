"use client";
import { useState } from "react";

export default function TicTacToe() {
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
}
