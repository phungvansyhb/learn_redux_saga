import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
import UiReducer from './UiReducer'

const allReducer = combineReducers({
    ui : UiReducer,
    task : TaskReducer 
   
})
export default allReducer;