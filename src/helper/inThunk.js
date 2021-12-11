import inApiLoadRedux from '../redux/inApiLoadRedux'

const inThunk = {
  createReq: (type, req) => {
    const FAIL = `${type}_FAIL`
    const SUCCESS = `${type}_SUCCESS`

    return params => async dispatch => {

      dispatch({ type })

      dispatch(inApiLoadRedux.start(type))

      try {

        const res = await req(params)

        dispatch({
          payload: res.data,
          type: SUCCESS,
        })

        dispatch(inApiLoadRedux.stop(type))

      } catch (e) {

        dispatch({
          error: true,
          payload: e,
          type: FAIL,
        })

        dispatch(inApiLoadRedux.start(type))

        //throw e
      }
    }
  },
}

export default inThunk