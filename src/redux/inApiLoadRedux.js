import { createAction, handleActions } from 'redux-actions'


const START = 'inApiLoad/START'
const STOP = 'inApiLoad/STOP'


const stateInit = {}


const inApiLoadRedux = handleActions({
  [START]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [STOP]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
}, stateInit)


inApiLoadRedux.start = createAction(
  START,
  reqType => reqType,
)

inApiLoadRedux.stop = createAction(
  STOP,
  reqType => reqType,
)


export default inApiLoadRedux