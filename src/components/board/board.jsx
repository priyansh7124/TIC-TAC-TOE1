import React from 'react'
import Square from '../square/Square'

const Board = ({squares,onClick,jumpTo}) => {
    const renderSquare = (i)=>{
        return <Square value={squares[i]} onClick={()=>onClick(i)}/>
    }
  return (
    <div className='game-section'>
        <div className='game-board'>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
        <button className='restart' onClick={()=>jumpTo(0)}>
            Restart the game 
        </button>
    </div>
  )
}

export default board
