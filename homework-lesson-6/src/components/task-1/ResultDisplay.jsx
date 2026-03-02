import { memo } from "react"

// export default function ResultDisplay({ children, result }) {

function ResultDisplay({ children, result }) {

    console.log("ResultDisplay відрендерився");

    return (
        <div className='task-1__result'>
            {children}
            <p>{result}</p>
        </div>
    )
}
// Обгортать в мемо отут
export default memo(ResultDisplay)