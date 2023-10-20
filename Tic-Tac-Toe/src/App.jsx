import "./App.css";
import { useState } from "react";

function Square({ value, clickSquare }) {
  return (
    <button className="square" onClick={clickSquare}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(squares[i] || Winner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    setSquares(nextSquares);
    setXisNext(!xIsNext);
    console.log(squares);
    console.log(xIsNext);

  }

  const winner = Winner(squares);
  let playerStatus = "";
  if(winner){
    playerStatus = "Winner is:" + winner;
  }else{
    playerStatus = "Next player:" + (xIsNext ? "X" : "O");
  }


  return (
    <>
    <div className="status">{playerStatus}</div>
      <div className="board-row">
        <Square value={squares[0]} clickSquare={() => handleClick(0)} />
        <Square value={squares[1]} clickSquare={() => handleClick(1)} />
        <Square value={squares[2]} clickSquare={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} clickSquare={() => handleClick(3)} />
        <Square value={squares[4]} clickSquare={() => handleClick(4)} />
        <Square value={squares[5]} clickSquare={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} clickSquare={() => handleClick(6)} />
        <Square value={squares[7]} clickSquare={() => handleClick(7)} />
        <Square value={squares[8]} clickSquare={() => handleClick(8)} />
      </div>
    </>
  );
}

function Winner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}