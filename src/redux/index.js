import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import infoListReadRedux from './info/infoListReadRedux'


const rootReducer = combineReducers({
  infoListReadRedux,
})


export function* rootSaga() {
  yield all([
    infoListReadRedux.readSaga()
  ])
}


export default rootReducer