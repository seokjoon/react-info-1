import { handleActions } from 'redux-actions'
import inThunk from '../../helper/inThunk'
import inApi from '../../api'
import inSaga from '../../helper/inSaga'
import { takeLatest } from 'redux-saga/effects'


const READ = 'infoCatsRead/READ'
const READ_FAIL = 'infoCatsRead/READ_FAIL'
const READ_SUCCESS = 'infoCatsRead/READ_SUCCESS'


const stateInit = {
  error: null,
  items: [],
}


const infoCatsReadRedux = handleActions({
  [READ_FAIL]:(state, { payload: error, }) => ({ //params: state, action
    ...state,
    error,
  }),
  [READ_SUCCESS]:(state, { payload: items, }) => ({
    ...state,
    items,
  }),
}, stateInit)


infoCatsReadRedux.read = inThunk.createReq(READ, inApi.info.readCatItems)


const readSaga = inSaga.createReq(READ, inApi.info.readCatItems)

infoCatsReadRedux.readSaga = function* () {
  yield takeLatest(READ, readSaga)
}


export default infoCatsReadRedux
