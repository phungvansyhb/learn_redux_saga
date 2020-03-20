import { fork, take, call , put } from 'redux-saga/effects'
import * as type from '../Contant/TYPE/Task'
import { fetchDataTask } from '../axios/Task'
import {fetDataTaskSuccess , fetchDataTaskFail} from '../Action/task'


function* watchFetchListTaskActiom() {
    yield take(type.FETCH_DATA_TASK)
        const resp = yield call(fetchDataTask)
        const { data, status } = resp;
        if (status === 200) {
            // dispatch action fetch sucess
            yield put(fetDataTaskSuccess(data))
        }
        if (status === 201) {
            // dispatch action fail
            yield put(fetchDataTaskFail(data))
        }

}


function* rootsaga() {
    yield fork(watchFetchListTaskActiom);
  
}
export default rootsaga;