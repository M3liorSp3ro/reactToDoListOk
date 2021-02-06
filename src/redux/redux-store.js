import { applyMiddleware, combineReducers, createStore } from "redux";
import taskReducer from './reducers/taskReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let redusers = combineReducers({
    tasks: taskReducer,
    form: formReducer
})

let store = createStore(redusers, composeWithDevTools(applyMiddleware(thunk)))

export default store