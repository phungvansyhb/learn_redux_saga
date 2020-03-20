import * as type from '../Contant/TYPE/Task'
import * as msg from '../Common/Message'
const initialState = {
    listTask : []
}
    

const reducer = ( state = initialState , action) => {
    switch (action.type) {
        case type.FETCH_DATA_TASK:
            return {...state}
        case type.FETCH_DATA_TASK_SUCCESS:
            return { ...state , listTask : action.payload}   
        case type.FETCH_DATA_TASK_FAIL:
            let msgerr = action.payload.message;
            msg.msgerr(msgerr);
            return {...state}
           
        default:
            return {...state}
           
    }
}
export default reducer;