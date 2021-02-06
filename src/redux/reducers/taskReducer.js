import { updateObjectInArray } from "../../utils/objects-helpers"

const ADD_TASK = 'ADD_TASK'
const DONE = 'DONE'
const IMPORTANT = 'IMPORTANT'
const DELETE_TASK = 'DELETE_TASK'
const EDIT_TASK = 'EDIT_TASK'

const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                id: Math.random(),
                text: action.taskText,
                done: false,
                important: false
            }
            return {
                tasks: [...state.tasks, newTask]
            }

        case DONE:
            return {
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', { done: action.taskDone })
            }

        case IMPORTANT:
            return {
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', { important: action.taskImportant })
            }

        case DELETE_TASK:
            return {
                tasks: state.tasks.filter(t => t.id !== action.taskId)
            }

        case EDIT_TASK:
            return {
                tasks: updateObjectInArray(state.tasks, action.taskId, 'id', { text: action.taskText })
            }
        default:
            return state

    }
}

// Action Creators
export const addTask = (taskText) => ({ type: ADD_TASK, taskText })
export const editTask = (taskId, taskText) => ({ type: EDIT_TASK, taskId, taskText })
export const changeDone = (taskId, taskDone) => ({ type: DONE, taskId, taskDone })
export const changeImportant = (taskId, taskImportant) => ({ type: IMPORTANT, taskId, taskImportant })
export const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId })

export default taskReducer