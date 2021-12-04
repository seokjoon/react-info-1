import { createAction, handleActions } from 'redux-actions'
import inSaga from '../../helper/inSaga'
import { takeLatest } from 'redux-saga/effects'
import inApi from '../../api'


const READ = 'infoListRead/READ'
const READ_FAIL = 'infoListRead/READ_FAIL'
const READ_SUCCESS = 'infoListRead/READ_SUCCESS'


const stateInit = {
  error: null,
  items: [],
  pageLast: 1,
}


const infoListReadRedux = handleActions({
  [READ_FAIL]: (state, { payload: error, }) => ({ //params: state, action
    ...state,
    error,
  }),
  [READ_SUCCESS]: (state, { payload: items, meta: res }) => ({
    ...state,
    items,
    pageLast: parseInt(res.headers['pageLast'], 10),
  }),
}, stateInit)

infoListReadRedux.read = createAction(READ, ({ page, }) => ({ page, }))


const readSaga = inSaga.createReq(READ, inApi.info.readList)

infoListReadRedux.readSaga = function* () {
  yield takeLatest(READ, readSaga)
}


export default infoListReadRedux