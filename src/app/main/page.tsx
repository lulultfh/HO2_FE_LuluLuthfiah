"use client";
import { useState } from "react";

export default function TicTacToe() {
  const [gameActive, setGameActive] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [gameState, setGameState] = useState<string[]>(Array(9).fill(""));
  const [statusMessage, setStatusMessage] = useState<string>("It's X's turn!");
}
