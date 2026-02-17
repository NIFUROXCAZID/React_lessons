import { useState } from 'react'
// Задача 6 На кухню поступають замовлення.
// Спочатку ми додаємо їх у список “Очікують на виконання”, якщо повар береться робити — замовлення переходить у список “Виконуються”,
// якщо замовлення виконано — переходить у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці
// Підказка: тут треба зберігати 3 масиви страв(waitingList, processingList, completedList)
const noDishMessage = <p>Немає страв у черзі</p>;

// функцію чи змінну і не тіки можна як пропси передавать
function WaitsDish({ waitingList, cookTheDish }) {
    return (
        <>
            {waitingList.length > 0 ? (
                waitingList.map(dish => (
                    <div key={dish.id} className="t6-waits-list__el">
                        <p>{dish.title}</p>
                        <button onClick={() => cookTheDish(dish.id)}>Готувати</button>
                    </div>
                ))
            ) : (
                <p>{noDishMessage}</p>
            )}
        </>
    )
}

function CookDish({ processingList, finishCook }) {
    return (
        <>
            {processingList.length > 0 ? (
                processingList.map(dish => (
                    <div key={dish.id} className="t6-waits-list__el">
                        <p>{dish.title}</p>
                        <button onClick={() => finishCook(dish.id)}>Приготовано</button>
                    </div>
                ))
            ) : (
                <p>{noDishMessage}</p>
            )}
        </>
    )
}

function GiveDish({ completedList, readyToGo }) {
    return (
        <>
            {completedList.length > 0 ? (
                completedList.map(dish => (
                    <div key={dish.id} className="t6-waits-list__el">
                        <p>{dish.title}</p>
                        <button onClick={() => readyToGo(dish.id)}>Подано</button>
                    </div>
                ))
            ) : (
                <p>{noDishMessage}</p>
            )}
        </>
    )
}

export default function Task_6() {
    const [dishAddName, setDishAddName] = useState("");

    function dishAddHandler(e) {
        setDishAddName(e.target.value);
    }

    const [waitingList, setWaitingList] = useState([]);
    function addDish(title) {
        const newDish = {
            id: Date.now().toString(), // унікальний id
            title: title,
        };

        setWaitingList(prev => [...prev, newDish]); // додаємо в кінець масиву
    }

    const [processingList, setProcessingList] = useState([]);
    function cookTheDish(dishId) {
        const mowedDish = waitingList.find(dish => dish.id === dishId);
        setProcessingList(prev => [...prev, mowedDish]);
        setWaitingList(prev => prev.filter(dish => dish.id !== dishId));
    }

    const [completedList, setCompletedList] = useState([]);
    function finishCook(dishId) {
        const mowedDish = processingList.find(dish => dish.id === dishId);
        setCompletedList(prev => [...prev, mowedDish]);
        setProcessingList(prev => prev.filter(dish => dish.id !== dishId));
    }

    function readyToGo(dishId) {
        setCompletedList(prev => prev.filter(dish => dish.id !== dishId));
    }

    return (
        <div className="t6-container">
            <div className="t6-input-row">
                <label htmlFor="">Нова замовлена страва</label>
                <input type="text" value={dishAddName} onChange={dishAddHandler} placeholder='Назва страви' />
                <button onClick={() => addDish(dishAddName)}>Додати</button>
            </div>
            <div className="t6-states-container">
                <div className="t6-states-element">
                    <p className="t6-states-title">Очікують на виконання</p>
                    <div className="t6-states-list">
                        <WaitsDish waitingList={waitingList} cookTheDish={cookTheDish} />
                    </div>
                </div>
                <div className="t6-states-element">
                    <p className="t6-states-title">Виконуються</p>
                    <div className="t6-states-list">
                        <CookDish processingList={processingList} finishCook={finishCook} />
                    </div>
                </div>
                <div className="t6-states-element">
                    <p className="t6-states-title">Готові до виносу</p>
                    <div className="t6-states-list">
                        <GiveDish completedList={completedList} readyToGo={readyToGo} />
                    </div>
                </div>
            </div>
        </div>
    )
}