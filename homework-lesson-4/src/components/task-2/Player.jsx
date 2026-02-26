import { useState } from 'react'

export default function Player({ children, isActive, onMove, checkedNumbers, setCheckedNumbers, checkNumber, gameEnded }) {

    const [playerInput, setPlayerInput] = useState('')

    const isAlreadyChecked = checkedNumbers.includes(Number(playerInput))
    function playerInputHandler(e) {
        setPlayerInput(e.target.value)
    }

    function handleMove() {
        if (!isActive) return
        if (!playerInput) return

        setCheckedNumbers(prev => [
            ...prev,
            Number(playerInput)
        ])
        checkNumber(playerInput)


        onMove()
        setPlayerInput('')
    }

    return (
        <fieldset disabled={!isActive || gameEnded !== false} className="task-2__player-wrap">
            {children}
            <div className="task-2__player">
                <label htmlFor="player-input">Цифра від 0 до 9</label>
                <input name="player-input" type="text" inputMode="numeric" maxLength={1} value={playerInput} onChange={playerInputHandler} placeholder='Цифра' />
            </div>
            <button className="task-2__btn" onClick={handleMove} disabled={!playerInput || isAlreadyChecked}>Зробити Хід</button>
            {/* <h4 className='task-2__finded-p'>Гравець вгадав цифри</h4>
            <div className="task-2__finded">
                <span>4</span>
                <span>9</span>
            </div> */}
        </fieldset>
    )
}