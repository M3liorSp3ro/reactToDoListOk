import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import './Task.scss'
import { changeDone, changeImportant, deleteTask, editTask } from '../../redux/reducers/taskReducer'

const Task = () => {

    const dispatch = useDispatch()

    let tasks = useSelector(store => store.tasks.tasks)

    tasks = tasks.sort((a, b) => {
        return (a.important === b.important) ? 0 : a.important ? -1 : 1
    })

    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     tasks.sort((a, b) => {
    //         return (a.important === b.important) ? 0 : a.important ? -1 : 1
    //     })
    //     setIsLoading(false)
    // }, [tasks])

    const onChangeDone = (taskId, taskDone) => {
        const newDone = !taskDone
        dispatch(changeDone(taskId, newDone))
    }

    const onClickEdit = (taskId, taskText) => {
        const newText = prompt('Введите новый текст задания', taskText)
        dispatch(editTask(taskId, newText))
    }

    const onClickImportant = (taskId, taskImportant) => {
        const newImportant = !taskImportant
        dispatch(changeImportant(taskId, newImportant))
        // setIsLoading(true)
    }

    const taskDelete = (id) => {
        dispatch(deleteTask(id))
    }



    return (
        <>
            { !tasks.length > 0
                ? <h1 className="none">Задачи отсутствуют :(</h1>
                : tasks.map(task => (
                    <div key={task.id} className={cn('items', task.important ? 'important' : null)} >
                        <div className="checkbox">
                            <input
                                onChange={() => onChangeDone(task.id, task.done)}
                                id={`task-${task.id}`}
                                type="checkbox"
                                checked={task.done}
                            />
                            <label htmlFor={`task-${task.id}`}>
                                <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.45 0.800018L5.19998 9.05002L1.44998 5.30002" stroke="#f2f2f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </label>
                        </div>
                        <p>{task.text}</p>
                        <div className="icons">

                            <div onClick={() => onClickEdit(task.id, task.text)} className="icons__item">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9338 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.6379 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825Z" fill="#DFDFDF" />
                                </svg>
                            </div>

                            <div onClick={() => onClickImportant(task.id, task.important)} className="icons__item">
                                <svg width="3" height="14" viewBox="0 0 3 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.23047 11.5391C0.550894 11.5391 0 12.09 0 12.7695C0 13.4491 0.550894 14 1.23047 14C1.91004 14 2.46094 13.4491 2.46094 12.7695C2.46094 12.09 1.91004 11.5391 1.23047 11.5391Z" fill="#E3E3E3" />
                                    <path d="M1.23047 0C0.550894 0 0 0.550894 0 1.23047V9.40625C0 10.0858 0.550894 10.6367 1.23047 10.6367C1.91004 10.6367 2.46094 10.0858 2.46094 9.40625V1.23047C2.46094 0.550894 1.91004 0 1.23047 0Z" fill="#E3E3E3" />
                                </svg>
                            </div>

                            <div onClick={() => taskDelete(task.id)} className="icons__item">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z" fill="#E3E3E3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Task