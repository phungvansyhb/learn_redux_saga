import {createStore} from 'redux'
import allReducer from '../Reducer'
import thunk from 'redux-thunk'
import {applyMiddleware , compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;
const sagaMiddleware = createSagaMiddleware()
const middleWare = [thunk,sagaMiddleware ];

const enhancer = composeEnhancers(
  applyMiddleware(...middleWare),
  // other store enhancers if any
);
const store = createStore(allReducer, enhancer);

sagaMiddleware.run(rootSaga)
export default store;