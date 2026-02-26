import { useState } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

// Задача 1. Приклад. Створити імітатор мессенджера.
//  Є можлиість додавати/відображати повідомлення і ставити лайки (додайте стилі на свій розсуд).

// Такс на треба компонент messenger в ньому можна описати список меседжів
// також функцію сенд а також лайк дізлайк
// потім можна ще компонент форму тайп месседж і компонент месседж
// давай по анології з TaskList з уроку
export default function Task_1() {

    const [messageList, setMessageList] = useState(() => [])

    // Класична функція додавання в ліст чогось типу месседжа,
    // нагадую собі що тут ми беремо минулий ліст ...list і додаємо ще 1 елемент ізі
    const addMessage = (message) => {
        setMessageList((list) => [
            ...list,
            {
                id: new Date().getTime(),
                message,
                likes: 0,
                dislikes: 0,
            },
        ])
    }

    const addLike = (id) => {
        setMessageList((list) =>
            list.map((message) =>
                message.id === id
                    ? {
                        ...message,
                        likes: message.likes + 1,
                    }
                    : message
            )
        )
    }

    const addDislike = (id) => {
        setMessageList((list) =>
            list.map((message) =>
                message.id === id
                    ? {
                        ...message,
                        dislikes: message.dislikes + 1,
                    }
                    : message
            )
        )
    }

    return (
        <div className='task-1'>
            <MessageList
                messages={messageList}
                addLike={addLike}
                addDislike={addDislike}
            />
            <MessageForm onAdd={addMessage}/>
        </div>
    )
}