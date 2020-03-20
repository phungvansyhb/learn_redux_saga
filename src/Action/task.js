import * as type from '../Contant/TYPE/Task'
import * as ApiTask from '../axios/Task'


export const fetchDataTask = () => ({
    type: type.FETCH_DATA_TASK,

})
export const fetDataTaskSuccess = (data) => ({
    type: type.FETCH_DATA_TASK_SUCCESS,
    payload: data
})
export const fetchDataTaskFail = (err) => ({
    type: type.FETCH_DATA_TASK_FAIL,
    payload: err
})

// export const fetchDataTaskRequest = (dispatch) => {
//     return dispatch => {
//         dispatch(fetchDataTask());
//         ApiTask.fetchDataTask()
//             .then((res) => {
//                 dispatch(fetDataTaskSuccess(res.data))
//             }).catch((err) => {
//                 dispatch(fetchDataTaskFail(err))
//             })

//     }
// }
