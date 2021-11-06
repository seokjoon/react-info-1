import { createAction, handleActions } from 'redux-actions'


const START = 'inApiLoading/START'
const STOP = 'inApiLoading/STOP'


const stateInit = {}


const inApiLoadingRedux = handleActions({
  [START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [STOP]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
}, stateInit)


inApiLoadingRedux.start = createAction(
  START,
  reqType => reqType,
)

inApiLoadingRedux.stop = createAction(
  STOP,
  reqType => reqType,
)


export default inApiLoadingRedux