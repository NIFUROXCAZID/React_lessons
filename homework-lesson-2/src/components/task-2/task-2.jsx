import { useState } from 'react'
import clsx from "clsx";
import styles from './task-2.module.scss'

// Задача 2. З випадаючого списку вибираємо клас квитка у літаку.Якщо
// 1) бізнес - виводимо елементи для вибору газети та коньяку(якщо вибрано коньяк,
//  то запропонувати закуску(так / ні)), на фоні зображення бізнес кают
// 2) економ – виводимо елементи для вибору типу пива і чипсів, на фоні хмарки.

// Все ламаем на невеличкі компоненти так правильней
function Snack() {
    const [businessCheckedItems, setBusinessCheckedItems] = useState({
        option1: false,
    });

    const businessHandler = (e) => {
        const { name, checked } = e.target;
        setBusinessCheckedItems((prev) => ({
            ...prev,
            [name]: checked
        }));
    };
    return (
        <div>
            <label>Чи бажаєте закуску</label>
            <input type="checkbox" name="option1" checked={businessCheckedItems.option1} onChange={businessHandler} />
            <p>Чи отримаєте ви закуску: {businessCheckedItems.option1 ? "Так" : "Ні"}</p>
        </div>
    );
}

function Business() {
    const [businessCheckedItems, setBusinessCheckedItems] = useState({
        option1: false,
        option2: false
    });

    const businessHandler = (e) => {
        const { name, checked } = e.target;
        setBusinessCheckedItems((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    return (
        <div className={styles.business}>
            <label>Газета</label>
            <input type="checkbox" name="option1" checked={businessCheckedItems.option1} onChange={businessHandler} />
            <label>Коньяк</label>
            <input type="checkbox" name="option2" checked={businessCheckedItems.option2} onChange={businessHandler} />
            <img src="/img/task-2/business.png" alt="Image" />
            <p>Чи отримаєте ви газету: {businessCheckedItems.option1 ? "Так" : "Ні"}</p>
            <p>Чи отримаєте ви коньяк: {businessCheckedItems.option2 ? "Так" : "Ні"}</p>
            {businessCheckedItems.option2 && <Snack />}
        </div>
    )

}

function Econom() {
    const [businessCheckedItems, setBusinessCheckedItems] = useState({
        option1: false,
        option2: false
    });

    const businessHandler = (e) => {
        const { name, checked } = e.target;
        setBusinessCheckedItems((prev) => ({
            ...prev,
            [name]: checked
        }));
    };

    return (
        <div className={styles.business}>
            <label>Чіпси</label>
            <input type="checkbox" name="option1" checked={businessCheckedItems.option1} onChange={businessHandler} />
            <label>Пиво</label>
            <input type="checkbox" name="option2" checked={businessCheckedItems.option2} onChange={businessHandler} />
            <img src="/img/task-2/cloud.png" alt="Image" />
            <p>Чи отримаєте ви чіпси: {businessCheckedItems.option1 ? "не заслуговуєте" : "Ні"}</p>
            <p>Чи отримаєте ви коньяк: {businessCheckedItems.option2 ? "не заслуговуєте" : "Ні"}</p>
        </div>
    )
}


export default function Task_2() {
    const [selected, setSelected] = useState(""); // state для value

    const handleSelected = (e) => {
        setSelected(e.target.value);
    };

    return (
        <div className={styles.container}>
            <p>Виберіть свій тип квитка</p>
            <select value={selected} onChange={handleSelected}>
                <option value="">Оберіть опцію</option>
                <option value="business">Бізнес</option>
                <option value="econom">Економ</option>
            </select>
            <p>Вибрана опція: {selected}</p>
            {selected == "business" && <Business />}
            {selected == "econom" && <Econom />}
        </div>
    )
}