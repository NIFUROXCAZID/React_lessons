import { useState } from 'react'

import Task_1 from './components/task-1/';
import Task_2 from './components/task-2/';
import Task_3 from './components/task-3/';
import Task_4 from './components/task-4/';
import Task_5 from './components/task-5/';
import Task_6 from './components/task-6/';

function App() {

    const [taskValue, setTaskValue] = useState(0)
    function changeHandler(value) {
        setTaskValue(value);
    }

    return (
        <>
            <h1>Урок 2 Домашнє завдання</h1>
            <div>
                <button onClick={() => changeHandler(1)}>TASK 1</button>
                <button onClick={() => changeHandler(2)}>TASK 2</button>
                <button onClick={() => changeHandler(3)}>TASK 3</button>
                <button onClick={() => changeHandler(4)}>TASK 4</button>
                <button onClick={() => changeHandler(5)}>TASK 5</button>
                <button onClick={() => changeHandler(6)}>TASK 6</button>
            </div>
          
            {taskValue === 1 && <Task_1 />}
            {taskValue === 2 && <Task_2 />}
            {taskValue === 3 && <Task_3 />}
            {taskValue === 4 && <Task_4 />}
            {taskValue === 5 && <Task_5 />}
            {taskValue === 6 && <Task_6 />}
        </>
    )
}

export default App
