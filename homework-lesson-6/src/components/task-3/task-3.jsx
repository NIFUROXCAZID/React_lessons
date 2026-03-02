import useWindowSize from './useWindowSize'
// Задача 3. useWindowSize – розмір вікна браузера
// Створіть кастомний хук useWindowSize, який повертає поточну ширину та висоту вікна браузера.Він повинен оновлюватися при зміні розміру вікна.
// Створіть компонент, який відображає поточні розміри вікна браузера(ширина x висота), використовуючи useWindowSize.На основі розмірів відображати іконки монітора, планшета або телефона.

export default function Task_3() {
    // const src = "/public/img/pc.png"
    const {width, height, src} = useWindowSize()

    return (
        <div className='task-3'>
            <p>Ширина вікна: <strong>{width}</strong></p>
            <p>Висота вікна: <strong>{height}</strong></p>
            <img src={src} alt="Image" />
        </div>
    )
}