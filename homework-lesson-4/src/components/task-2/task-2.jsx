import { useState, useEffect } from 'react'
import GameField from './GameField'
import Player from './Player'
import CheckedNums from './CheckedNums'

// Задача 2. Задача. Гра “Вгадай число”. Правила гри:
// 1) комп”ютер генерує трицифрове число;
// 2) кожен гравець по черзі задає цифру, якої ще не було(відсліковуємо, щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести(блокуємо кнопку “Зробити хід”)).
// 3) якщо цифру вгадано, вона відображаться у полі гри “Число”;
// 4) програє той, хто вгадав останню цифру.
// Бажано відображати біля області кожного гравця цифри, які він вгадав

export default function Task_2() {
    const [numbers, setNumbers] = useState(() => {
        return Array.from({ length: 3 }, (_, index) => ({
            id: index,
            value: Math.floor(Math.random() * 10),
            opened: false,
        }));
    });

    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [checkedNumbers, setCheckedNumbers] = useState([])
    const [gameEnded, setGameEnded] = useState(false)

    const checkNumber = (input) => {
        setNumbers((prev) =>
            prev.map((item) =>
                item.value === Number(input)
                    ? { ...item, opened: true }
                    : item
            )
        )
    }

    useEffect(() => {
        if (numbers.every((item) => item.opened)) {
            if (currentPlayer === 1) {
                setGameEnded(1)
            } else if (currentPlayer === 2) {
                setGameEnded(2)
            }
        }
    }, [numbers, currentPlayer])


    return (
        <div className='task-2'>
            <GameField
                numbers={numbers}>
                <h2 className='zero-m-p'>Число</h2>
            </GameField>
            <CheckedNums checkedNumbers={checkedNumbers} />
            <div className='task-2__players-zone'>
                <Player isActive={currentPlayer === 1}
                    onMove={() => setCurrentPlayer(2)}
                    checkedNumbers={checkedNumbers}
                    setCheckedNumbers={setCheckedNumbers}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    checkNumber={checkNumber}
                    gameEnded={gameEnded}>
                    <h3 className='zero-m-p'>Гравець 1</h3>
                </Player>
                <Player isActive={currentPlayer === 2}
                    onMove={() => setCurrentPlayer(1)}
                    checkedNumbers={checkedNumbers}
                    setCheckedNumbers={setCheckedNumbers}
                    numbers={numbers}
                    setNumbers={setNumbers}
                    checkNumber={checkNumber}
                    gameEnded={gameEnded}>
                    <h3 className='zero-m-p'>Гравець 2</h3>
                </Player>
            </div>
            <div className='task-2__finish'>
                {gameEnded == 1 ? <p>ГРАВЕЦЬ 1 ПРОГРАВ</p> : <></>}
                {gameEnded == 2 ? <p>ГРАВЕЦЬ 2 ПРОГРАВ</p> : <></>}
            </div>
        </div>
    )
}