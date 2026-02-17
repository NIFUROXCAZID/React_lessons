import { useState } from 'react'
import clsx from "clsx";

// Задача 3. Елемент тренажера англійської.Виводимо зображення елемента і слово.
// Користувач вводить відповідь.Якщо вірно – відтворюємо фразу «Добре.Молодець!» (і додаємо зелену рамку до елемента),
//  якщо ні - то відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону рамку).

export default function Task_3() {
    
    const collection = [
        {
            imgPath: "/img/task-3/book.png",
            word: "book",
            translate: "книга",
        },
        {
            imgPath: "/img/task-3/chair.png",
            word: "chair",
            translate: "стілець",
        },
        {
            imgPath: "/img/task-3/table.png",
            word: "table",
            translate: "стіл",
        },
    ]

    // треба так щоб при перерендері не змінився, [index]  бо сеттер ми не використовуєм можна і [index, setIndex]
    const [index] = useState(() => Math.floor(Math.random() * 3));
    const item = collection[index];

    const [ukrWord, setUkrWord] = useState("");
    const [rightTrans, setRightTrans] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const ukrWordHandler = e => {
        setUkrWord(e.target.value);
    }

    function checkTranslate() {
        setIsChecked(true);
        if (ukrWord === item.translate) {
            setRightTrans(true);
        } else {
            setRightTrans(false);
        }
    }

    return (
        // без clsx це шиза була б а так норм
        <div className={clsx(
            "task-3",
            isChecked && rightTrans && "task-3--right",
            isChecked && !rightTrans && "task-3--wrong"
        )}>
            <img src={item.imgPath} alt="Image" />
            <p>Англійське слово <strong>{item.word}</strong></p>
            <p>Ваш переклад</p>
            <input type="text" value={ukrWord} onChange={ukrWordHandler} />
            <button onClick={checkTranslate}>Перевірити</button>
            {isChecked && (rightTrans ? <p>Добре. Молодець!</p> : <p>Невірно, спробуйте ще раз</p>)}
        </div>
    )
}