import { useState, useMemo, useCallback, useDeferredValue } from "react"
import GridRow from "./GridRow"
// Задача 2. Таблиця з фільтрацією та сортуванням, чутлива до UI
// •	Створіть компонент DataGrid(батьківський) та GridRow(дочірній).
// •	DataGrid отримує великий масив даних, має поле вводу для фільтрації, кнопки для сортування за різними колонками.
// •	GridRow(обгорнутий у React.memo) відображає один рядок даних.
// •	Використайте useDeferredValue для пошукового запиту та / або параметрів сортування.
// •	Використайте useMemo для обчислення відфільтрованих та відсортованих даних на основі відкладених значень.
// •	Використайте useCallback для функцій - обробників сортування та інших інтерактивних елементів, які передаються до дочірніх компонентів.
// •	Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо обробка даних займає час.

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

function Task_2() {
    // 🔹 useState — зберігає локальний стан компонента.
    // Кожна зміна search викликає ререндер.
    const [search, setSearch] = useState("")

    // 🔹 useState — поле для сортування (наприклад: "age", "salary").
    const [sortField, setSortField] = useState(null)

    // 🔹 useState — напрямок сортування.
    // "asc" = зростання, "desc" = спадання.
    const [sortDirection, setSortDirection] = useState("asc")

    // 🔹 useDeferredValue — створює відкладену версію search.
    // search оновлюється миттєво (для input),
    // а deferredSearch може оновлюватися з нижчим пріоритетом.
    // Це допомагає уникнути лагів при важких обчисленнях.
    const deferredSearch = useDeferredValue(search)

    // 🔹 useCallback — мемоізує функцію.
    // Тобто React не створює нову функцію при кожному ререндері.
    // Це важливо, якщо функцію передають у дочірні компоненти (наприклад, memo).
    const handleSearch = useCallback((e) => {
        setSearch(e.target.value)
    }, []) // залежностей немає, бо setSearch стабільний

    // 🔹 useCallback — стабільна функція сортування.
    // Залежить від sortField, бо логіка використовує його значення.
    const handleSort = useCallback((field) => {
        if (sortField === field) {
            // якщо натиснули на те саме поле — міняємо напрямок
            setSortDirection(prev =>
                prev === "asc" ? "desc" : "asc"
            )
        } else {
            // якщо нове поле — встановлюємо його і ставимо asc
            setSortField(field)
            setSortDirection("asc")
        }
    }, [sortField]) // залежність потрібна для актуального значення

    // 🔹 useMemo — мемоізує результат обчислення.
    // Фільтрація + сортування можуть бути "дорогими" операціями.
    // React перераховує дані тільки коли змінюються залежності.
    const processedData = useMemo(() => {

        // створюємо копію масиву, щоб не мутувати original data
        let result = [...data]

        // 🔎 Фільтрація на основі deferredSearch
        // використовуємо deferredSearch, щоб не блокувати UI під час вводу
        if (deferredSearch) {
            result = result.filter(user =>
                user.name.toLowerCase().includes(deferredSearch.toLowerCase()) ||
                user.email.toLowerCase().includes(deferredSearch.toLowerCase())
            )
        }

        // ⬆️⬇️ Сортування
        // виконується тільки якщо вибране поле сортування
        if (sortField) {
            result.sort((a, b) => {
                if (a[sortField] < b[sortField]) {
                    return sortDirection === "asc" ? -1 : 1
                }
                if (a[sortField] > b[sortField]) {
                    return sortDirection === "asc" ? 1 : -1
                }
                return 0
            })
        }

        // useMemo повертає вже обчислений результат
        return result

        // залежності useMemo:
        // - data (якщо масив зміниться)
        // - deferredSearch (відкладений пошук)
        // - sortField (поле сортування)
        // - sortDirection (напрямок)
    }, [deferredSearch, sortField, sortDirection])

    return (
        <div className="task-2">
            <input value={search} onChange={handleSearch} placeholder="Search..."/>
            <button onClick={() => handleSort("age")}>Sort by Age</button>
            <button onClick={() => handleSort("salary")}>Sort by Salary</button>
            {processedData.map(user => (
                <GridRow key={user.id} user={user} />
            ))}
        </div>
    )
}

export default Task_2