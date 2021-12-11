import inApiLoadRedux from '../redux/inApiLoadRedux'
import { call, put, } from 'redux-saga/effects'
//import { call, put, select, } from 'redux-saga/effects'

const inSaga = {
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return function*(action) {

      //console.log(yield select(state => state))

      yield put(inApiLoadRedux.start(type))

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

      yield put(inApiLoadRedux.stop(type))

    }
  },
}

export default inSaga