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
    if(squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    setSquares(nextSquares);
    setXisNext(!xIsNext);
    console.log(squares);
    console.log(xIsNext);
  }


  return (
    <>
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
