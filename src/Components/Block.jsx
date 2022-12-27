import React, { useState } from 'react'
import Square from './Square'

const Block = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isXturn, setIsXturn] = useState(true)

    function checkwinner() {
        const winningLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winningLogic) {
            const [a, b, c] = logic;
            if (state[a]!==null && state[a] === state[b] && state[b] === state[c]) {
                return state[a];
            }
            
        }
        return false;
    };

    const isWinner = checkwinner();

    

    const handler = (index) => {

        if(state[index]!==null)
        {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXturn ? "X" : "0"
        setState(copyState);
        setIsXturn(!isXturn)
    }

    const handleReset=()=>
    {
        setState(Array(9).fill(null))
    }
    return (
        <>
        <div className='board-container'>
            {
                isWinner ? (
                    <div id='winner'>
                         {isWinner}   won the game
                        <button onClick={handleReset}>Play Again</button>
                    </div>
                ) :
                    (
                        <>
                        
                            <div className='board-row'>
                                <Square click={() => handler(0)} value={state[0]} />
                                <Square click={() => handler(1)} value={state[1]} />
                                <Square click={() => handler(2)} value={state[2]} />
                            </div>
                            <div className='board-row'>
                                <Square click={() => handler(3)} value={state[3]} />
                                <Square click={() => handler(4)} value={state[4]} />
                                <Square click={() => handler(5)} value={state[5]} />
                            </div>
                            <div className='board-row'>
                                <Square click={() => handler(6)} value={state[6]} />
                                <Square click={() => handler(7)} value={state[7]} />
                                <Square click={() => handler(8)} value={state[8]} />
                            </div>

        <h3>Player {isXturn? "X":"0"} Please Move</h3>
                            
                        </>
                    )
                    
            }
        </div>
        </>


    )
}

export default Block







