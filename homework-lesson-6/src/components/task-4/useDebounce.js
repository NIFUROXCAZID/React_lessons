import { useState, useEffect } from "react"
// Тіки якщо value не змінюється протягом delay
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        // створюємо таймер
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // cleanup — якщо value змінився раніше ніж delay,
        // ми скасовуємо попередній таймер
        // Виуликає клін ап перед наступним рендером
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce