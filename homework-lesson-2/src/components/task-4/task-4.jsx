// Задача 4 Вивести список як маркований список з елементами у форматі (name: salary)

export default function Task_4() {
    
    const workersList2 = [
        {
            id: '111',
            name: 'Іванов',
            salary: 10000,
        },
        {
            id: '1112',
            name: 'Петров',
            salary: 20000,
        },
        {
            id: '1113',
            name: 'Сидоров',
            salary: 50000,
        },
    ]

    return (
        <div>
            <ul>
                {workersList2.map(worker => (
                    <li>
                        <p>id: {worker.id}</p>
                        <p>name: {worker.name}</p>
                        <p>salary: {worker.salary}</p>
                    </li>
                ))}
            </ul>
            <hr />
            <h2>Більш правильно Object.entries</h2>
            <hr />
            <ul>
                {workersList2.map(worker => (
                    <li key={worker.id}>
                        {Object.entries(worker).map(([key, value]) => (
                            <p key={key}>{key}: {value}</p>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )
}