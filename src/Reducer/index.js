import {combineReducers} from 'redux'
import TaskReducer from './TaskReducer'
const allReducer = combineReducers({
    task : TaskReducer 
})
export default allReducer;