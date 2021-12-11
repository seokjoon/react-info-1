import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import infoListReadRedux from './info/infoListReadRedux'
import infoCatListReadRedux from './info/infoCatListReadRedux'


const rootReducer = combineReducers({
  infoListReadRedux,
  infoCatListReadRedux,
})


export function* rootSaga() {
  yield all([
    infoListReadRedux.readSaga()
  ])
}


export default rootReducer