import React from 'react'

const Moves = ({history,jumpTo}) => {
    const moves=history.map((step,move)=>{
        const desc=move ? 'Go to move #' +move : 'Go to game start'
        return(
            <li key={move}>
                <button onClick={()=> jumpTo(move)}>{dec}   
                </button>
            </li>
        )
    })
  return <>{moves}</>
}

export default Moves
