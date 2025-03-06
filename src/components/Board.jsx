import React, { useState } from 'react'
import Square from './Square'

function Board() {

    const [squares, setSquares] = useState(Array(9).fill("_"))
    const [current, setCurrent] = useState("X");
    const [ winner, setWinner] = useState("Победитель еще не определен")
    const [endGame, setEndGame] = useState(false);

    function handleClick(num){
        const nextSquares = squares.slice();
        if(nextSquares[num] === "X" || nextSquares[num] === "O"){
            return
        }
        nextSquares[num] = current;
        setSquares(nextSquares);

        if(current === "X"){
            setCurrent("O");
        }
        if(current === "O"){
            setCurrent("X");
        }

        const newArr = nextSquares.filter(x=>x === "_");

        if(newArr.length === 0){
            setEndGame(true)
        }else{
            setEndGame(false)
        }

        if(nextSquares[0] === nextSquares[1] && nextSquares[1] === nextSquares[2]){
            setEndGame(true);
            setWinner(nextSquares[0])
        }

        console.log(nextSquares)

    }

  return (
    <>
    <div className="tablo">
        <p>Сейчас вводит: {current}</p>
        <p>Победитель: {winner}</p>
    </div>
    <div className="board-row">
        <Square value={squares[0]} onHandleClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onHandleClick={()=>handleClick(1)} />
        <Square value={squares[2]} onHandleClick={()=>handleClick(2)} />

    </div>
    <div className="board-row">
        <Square value={squares[3]} onHandleClick={()=>handleClick(3)} />
        <Square value={squares[4]} onHandleClick={()=>handleClick(4)} />
        <Square value={squares[5]} onHandleClick={()=>handleClick(5)} />
    </div>
    <div className="board-row">
        <Square value={squares[6]} onHandleClick={()=>handleClick(6)} />
        <Square value={squares[7]} onHandleClick={()=>handleClick(7)} />
        <Square value={squares[8]} onHandleClick={()=>handleClick(8)} />

    </div>
    {endGame && <div className="end-game">
        <p style={{color:"red", fontWeight: "bold"}} >Игра окончена!</p>
    </div> }
    

    </>
  )
}

export default Board