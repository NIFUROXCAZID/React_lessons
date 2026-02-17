// Задача 5 Самостійно сформуйте масив даних та виведіть фрагмент на зразок поданого (дані не обов’язково повинні співпадати)

export default function Task_5() {

    const dataArr = [
        {
            id: '1',
            imgSrc: "/img/task-5/image-1.png",
            title: "Wikipedia",
            subTitle: "React",
            ref: "https://uk.wikipedia.org/wiki/React",
            description: "React (старі назви: React.js, ReactJS) — відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового ...",
        },
        {
            id: '2',
            imgSrc: "/img/task-5/image-2.png",
            title: "React",
            subTitle: "Посібник: знайомство з React",
            ref: "https://uk.legacy.reactjs.org/tutorial/tutorial.html",
            description: "React — це декларативна, ефективна і гнучка JavaScript-бібліотека, призначена для створення інтерфейсів користувача. Вона дозволяє компонувати складні ...",
        },
        {
            id: '3',
            imgSrc: "/img/task-5/image-3.png",
            title: "cases.media",
            subTitle: "Що таке React? Як почати вивчати Реакт? Основні навички",
            ref: "https://cases.media/en/article/sho-take-react-js-yak-pochati-vivchati-reakt-navichki-dlya-react-developer?srsltid=AfmBOopO4zaqpnRevyP-QjmRAXNP6L-UIeeRJQaXSDaoIU6cePk1iusy",
            description: "11 июл. 2023 г. — React — це бібліотека JavaScript для створення веб-інтерфейсів. Вона дозволяє розробникам будувати компоненти, які забезпечують відображення і ...",
        },
    ]

    return (
        <div>
            {dataArr.map(dataEl => (
                <>
                    <hr />
                    <div key={dataEl.id} style={{padding: "10px", display: "flex", gap: "5px", justifyContent: "flex-start", alignItems: "center" }}>
                        <img src={dataEl.imgSrc} alt="Image" />
                        <div>
                            <h3>{dataEl.title}</h3>
                            <a href={dataEl.ref}>{dataEl.ref}</a>
                        </div>
                    </div>
                    <div>
                        <h4>{dataEl.subTitle}</h4>
                        <p>{dataEl.description}</p>
                    </div>
                    <hr />
                </>
            ))}
        </div>
    )
}