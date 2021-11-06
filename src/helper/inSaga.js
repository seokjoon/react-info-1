import inApiLoadingRedux from '../redux/ducks/inApiLoadingRedux'
import { call, put, } from 'redux-saga/effects'

const inSaga = {
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return function*(action) {

      yield put(inApiLoadingRedux.start(type))

      try {
        const res = yield call(req, action.payload)
        yield put({
          meta: res,
          payload: res.data,
          type: SUCCESS,
        })
      } catch (e) {
        yield put({
          error: true,
          payload: e,
          type: FAIL,
        })
      }

      yield put(inApiLoadingRedux.stop(type))
    }
  },
}

export default inSaga