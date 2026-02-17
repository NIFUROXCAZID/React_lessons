import { useState } from 'react'
import clsx from "clsx";
import styles from './task-1.module.scss'

// Задача 1. Вводимо логіна і пароль.Якщо логін вірний відображаємо смайл.Якщо ні, то:
// 1) якщо логін = Іван – колір повідомлення про помилку синій
// 2) якщо хтось інший, то колір повідомлення червоний

export default function Task_1() {

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isBlueAlert, setIsBlueAlert] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const trueLogin = "admin2000";
    const truePass = "dolarPo8";

    const loginHandler = e => {
        setLogin(e.target.value);
    }

    const passHandler = e => {
        setPass(e.target.value);
    }

    function validateUser() {
        if (login == trueLogin && pass == truePass) {
            setIsValid(true);
            setIsBlueAlert(false);
            setIsInvalid(false);
        } else if (login == "ivan") {
            setIsBlueAlert(true);
            setIsValid(false);
            setIsInvalid(true);
        } else {
            setIsValid(false);
            setIsBlueAlert(false);
            setIsInvalid(true);
        }
    }

    const emojiClass = clsx(
        styles["container__smile-img"],
        isValid && styles["container__smile-img--show"]
    );

    const alertClass = clsx(
        styles["container__err-p"],
        isBlueAlert && styles["container__err-p--blue"],
        isInvalid && styles["container__err-p--show"]
    );

    return (
        <div className={styles.container}>
            <p>Справжній логін <strong>admin2000</strong> <br /> Справжній пароль <strong>dolarPo8</strong></p>
            <input className={styles.container__input} value={login} onChange={loginHandler} placeholder='Логін' type="text" />
            <input className={styles.container__input} value={pass} onChange={passHandler} placeholder='Пароль' type="text" />

            <button className={styles.container__btn} onClick={validateUser}>Вхід</button>

            <p className={alertClass}>
                Логін, або пароль не вірні.
            </p>

            <img
                className={emojiClass}
                src="/img/task-1/smile.jpg"
                alt="Image"
            />
        </div>
    )
}

// export default Task_1