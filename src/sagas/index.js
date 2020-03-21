import { fork, take, call , put , delay} from 'redux-saga/effects'
import * as type from '../Contant/TYPE/Task'
import { fetchDataTask } from '../axios/Task'
import {fetDataTaskSuccess , fetchDataTaskFail} from '../Action/task'
import {showLoading , hideLoading} from '../Action/ui'


function* watchFetchListTaskActiom() {
    while(true){
        // take () - ham blocking se cho phep thuc thi code ben duoi neu action duoc goi
        yield take(type.FETCH_DATA_TASK)
            // goi Api bang Call () - mot ham blocking
            const resp = yield call(fetchDataTask)  
            // goi loading
            yield put (showLoading())
                const { data, status } = resp;
          
                if (status === 200) {
                    // dispatch action fetch sucess bawng put
                    yield put(fetDataTaskSuccess(data))
                }
                if (status === 201) {
                    // dispatch action fail bang put
                    yield put(fetchDataTaskFail(data))  
                }
            // cho delay 1s trong truogn hop load qua nhanh
            yield delay(1000);
            // tat loading
            yield put(hideLoading())
         
    }
    
}


function* rootsaga() {
    yield fork(watchFetchListTaskActiom);
  
}
export default rootsaga;