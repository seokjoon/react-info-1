import { createAction, handleActions } from 'redux-actions'
import inSaga from '../../helper/inSaga'
import { takeLatest } from 'redux-saga/effects'
import inApi from '../../api'


const READ = 'infosRead/READ'
const READ_FAIL = 'infosRead/READ_FAIL'
const READ_SUCCESS = 'infosRead/READ_SUCCESS'


const stateInit = {
  error: null,
  items: [],
  pageLast: 1,
}


const infosReadRedux = handleActions({
  [READ_FAIL]: (state, { payload: error, }) => ({ //params: state, action
    ...state,
    error,
  }),
  [READ_SUCCESS]: (state, { payload: items, meta: res }) => ({
    ...state,
    //items,
    items: res.data.data,
    pageLast: parseInt(res.headers['pageLast'], 10),
  }),
}, stateInit)

infosReadRedux.read = createAction(READ, ({ page, }) => ({ page, }))


const readSaga = inSaga.createReq(READ, inApi.info.readItems)

infosReadRedux.readSaga = function* () {
  yield takeLatest(READ, readSaga)
}


export default infosReadRedux
