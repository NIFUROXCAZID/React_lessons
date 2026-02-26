import { useState } from 'react'

export default function MessageForm({ onAdd }) {
    const [message, setMessage] = useState('')

    function handleChange(e) {
        setMessage(e.target.value)
    }

    function addTask(e) {
        e.preventDefault()
        onAdd(message)
        setMessage('')
    }

    return (
        <form className='task-1__form'>
            <input type="text" value={message} onChange={handleChange} placeholder='Type a new massage'/>
            <button onClick={addTask} disabled={!message.trim()}>Send</button>
        </form>
    )
}