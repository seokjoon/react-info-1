import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import infosReadRedux from './info/infosReadRedux'
import infoCatsReadRedux from './info/infoCatsReadRedux'


const rootReducer = combineReducers({
  infosReadRedux,
  infoCatsReadRedux,
})


export function* rootSaga() {
  yield all([
    infosReadRedux.readSaga(),
    infoCatsReadRedux.readSaga(),
  ])
}


export default rootReducer
