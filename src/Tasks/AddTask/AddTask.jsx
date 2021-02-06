import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
// import { useDispatch, useSelector } from 'react-redux'

import addSvg from '../../assets/img/add.svg'
import { addTask } from '../../redux/reducers/taskReducer'
import './AddTask.scss'

const AddTask = () => {

    const [visibleForm, setVisibleForm] = useState(false)
    const dispatch = useDispatch()

    const addNewTask = (value) => {
        dispatch(addTask(value.taskText))
        setVisibleForm(false)
    }

    return (
        <div className="form">
            {
                !visibleForm
                    ? <div onClick={() => setVisibleForm(true)} className="form-new">
                        <img src={addSvg} alt="Add icon" />
                        <span>Новая задача</span>
                    </div>
                    : <AddTaskReduxForm setVisibleForm={setVisibleForm} onSubmit={addNewTask} />
            }
        </div>
    )
}

const AddTaskForm = ({ setVisibleForm, handleSubmit, pristine }) => {
    return (
        <form className="form-block" onSubmit={handleSubmit}>
            <Field
                name={'taskText'}
                component={'input'}
                className="field"
                placeholder={'Текст задачи'}
            />
            <button disabled={pristine} className="button">
                Добавить задачу
            </button>
            <button onClick={() => setVisibleForm(false)} className="button button--grey">
                Отмена
            </button>
        </form>
    )
}

const AddTaskReduxForm = reduxForm({ form: 'addTask' })(AddTaskForm)

export default AddTask