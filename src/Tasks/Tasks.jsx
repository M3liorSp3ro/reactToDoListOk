import React from 'react'
import Task from './Task/Task'

import './Tasks.scss'
import AddTask from './AddTask/AddTask'

const Tasks = () => {

    return (
        <div className="tasks">
            <Task />
            <AddTask />
        </div>
    )
}

export default Tasks