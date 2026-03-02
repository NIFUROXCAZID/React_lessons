import { useState, useMemo } from "react"
import useDebounce from "./useDebounce"

// Задача 4. useDebounce – відкладений виклик функції
// Створіть кастомний хук useDebounce, який приймає значення та затримку в мілісекундах.
// Він повинен повертати "відкладене" значення, яке оновлюється лише після того, як минув заданий час без змін.
// Створіть поле пошуку, де результати пошуку оновлюються не відразу після кожного символу, а з невеликою затримкою(наприклад, 500мс) після зупинки введення, використовуючи useDebounce.

// Що таке debounce ?
// Debounce означає:
// "Виконай дію тільки якщо протягом N мс нічого не змінювалось"
// Тобто:
// r → re → rea → reac → react
// Якщо ти швидко друкуєш — фільтрація НЕ запускається.
// Запускається тільки коли ти зупинився на 500мс.

const data = [
    {
        id: 1,
        name: "One Ivan Petrenko",
        email: "ivan@gmail.com",
        age: 20,
        salary: 2000
    },
    {
        id: 2,
        name: "Two Ivan Petrenko",
        email: "ivan@gmail.com",
        age: 28,
        salary: 1200
    },
    {
        id: 3,
        name: "Three Ivan Petrenko",
        email: "ivan@gmail.com",
        age: 22,
        salary: 1000
    },
    {
        id: 4,
        name: "Four Ivan Petrenko",
        email: "ivan@gmail.com",
        age: 26,
        salary: 1700
    },
    {
        id: 5,
        name: "Five Ivan Petrenko",
        email: "ivan@gmail.com",
        age: 24,
        salary: 1500
    },
]

export default function Task_4() {
    const [search, setSearch] = useState("")

    // 👇 debounce 500мс
    const debouncedSearch = useDebounce(search, 500)

    const filteredData = useMemo(() => {
        if (!debouncedSearch) return data

        return data.filter(item =>
            item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
    }, [debouncedSearch])

    return (
        <div>
            <h2>Debounce Search</h2>
            {/* просто інпут для пошуку з звтримкою але чось так туго йде */}
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
            <p>Search: {search}</p>
            <p>Debounced: {debouncedSearch}</p>
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>
                        {item.name} — {item.salary}$
                    </li>
                ))}
            </ul>
        </div>
    )
}