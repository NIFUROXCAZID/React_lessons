export default function CheckedNums({ checkedNumbers }) {
    return (
        <div className="task-2__cheked-nums">
            <h3 className='zero-m-p'>Вже перевірені цифри, їх не можна ввести знов</h3>
            <div className="task-2__finded">
                {checkedNumbers.length > 0 ? (
                    checkedNumbers.map(num => (
                        <span key={num}>{num}</span>
                    ))
                ) : (
                    <p>Цифр ще немає</p>
                )}
            </div>
        </div>
    )
}