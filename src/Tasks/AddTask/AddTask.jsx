import React, { useState } from 'react'

import addSvg from '../../assets/img/add.svg'
import './AddTask.scss'

const AddTask = () => {

    const [visibleForm, setVisibleForm] = useState(false)

    return (
        <div className="form">

            {
                !visibleForm
                    ? <div onClick={() => setVisibleForm(true)} className="form-new">
                        <img src={addSvg} alt="Add icon" />
                        <span>Новая задача</span>
                    </div>
                    : <div className="form-block">
                        <input
                            className="field"
                            type="text"
                            placeholder="Текст задачи"
                        />
                        <button className="button">
                            Добавить задачу
                        </button>
                        <button onClick={() => setVisibleForm(false)} className="button button--grey">
                            Отмена
                        </button>
                    </div>
            }



        </div>
    )
}

export default AddTask