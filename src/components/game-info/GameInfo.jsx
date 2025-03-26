import React from 'react'
import Friends from '../../assets/images/friends.webp';


const GameInfo = ({status,winner,xIsNext}) => {
  return (
    <div className='game-information'>
        {xIsNext && !winner ? (
            <h3 className='player-x'>Nowyou, player O!</h3>
        ) : !xIsNext && !winner ? (
            <h3 className='player-o'>Now you, player O!</h3>
        ) : winner && status === 'Winner:X' ? (
            <h3 className='player-x'>Nice! I won!</h3>
        ) : (
            <h3 className='player-o'>Wohoo! I made it!</h3>
        )}
        <img src="{Friends}" alt="Player X and Player O" />
    </div>
  )
}

export default GameInfo
