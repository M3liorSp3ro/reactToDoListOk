import React from 'react'
import Task from './Task/Task'

import './Tasks.scss'
import AddTask from './AddTask/AddTask'

const tasks = [
    { id: 1, text: 'ReactJS Hooks (useState, useReducer, useEffect и т.д.)', done: true, important: true },
    { id: 2, text: 'Изучить паттерны проектирования', done: false, important: false },
]

const Tasks = () => {
    return (
        <div className="tasks">
            <Task tasks={tasks} />
            <AddTask />
        </div>
    )
}

export default Tasks