
export default function GameField({ numbers, children }) {
    return (
        <div className='task-2__list-wrap'>
            {children}
            <div className='task-2__list'>
                {numbers.map(number => (
                    <span className={`task-2__num ${!number.opened ? "task-2__num--hidden" : ""}`} key={number.id}>{number.value}</span>
                ))}
            </div>
        </div>
    )
}