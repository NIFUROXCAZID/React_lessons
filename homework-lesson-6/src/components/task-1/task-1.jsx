import { useState, useMemo, useId } from 'react'
import ResultDisplay from './ResultDisplay'
// Задача 1. Оптимізація вибіркового рендеру з useMemo та React.memo
// Створіть компонент - калькулятор, який має два незалежні поля вводу: одне для числа A і одне для числа B.Також є окремий компонент ResultDisplay, який відображає A + B.Обгорніть ResultDisplay у React.memo().Використайте useMemo в батьківському компоненті, щоб обчислити A + B і передати цей результат до ResultDisplay.Переконайтеся, що ResultDisplay ререндериться лише тоді, коли змінюються A або B, а не коли змінюється інший незалежний стан у батьківському компоненті(наприклад, лічильник, що не впливає на A чи B).


export default function Task_1() {
    const aId = useId()
    const bId = useId()
    const [count, setCount] = useState(0)

    function countHandler() {
        setCount(prev => prev + 1)
    }

    const [a, setA] = useState("")
    const [b, setB] = useState("")

    function handleA(e) {
        setA(e.target.value)
    }
    function handleB(e) {
        setB(e.target.value)
    }

    // const result = Number(a) + Number(b)

    const result = useMemo(() => {
        return Number(a) + Number(b)
    }, [a, b])

    const title = useMemo(() => {
        return <h2>Результат A + B</h2>
    }, [])

    return (
        <div className='task-1'>
            <div className='task-1__counter'>
                <button onClick={countHandler}>count + 1</button>
                <p>{count}</p>
            </div>
            <div className='task-1__input'>
                <label htmlFor={aId}>Введіть число А</label>
                <input value={a} onChange={handleA} type="number" id='aId' placeholder='Число А'/>
            </div>
            <div className='task-1__input'>
                <label htmlFor={bId}>Введіть число B</label>
                <input value={b} onChange={handleB} type="number" id='bId' placeholder='Число B' />
            </div>
            <ResultDisplay result={result}>
                {/* <h2>Результат A + B</h2> */}
                {/* чілдрен з useMemo отак надо бо вони теж перерендеряться */}
                {title}
            </ResultDisplay>
        </div>
    )
}