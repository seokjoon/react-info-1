import { handleActions } from 'redux-actions'
import inThunk from '../../helper/inThunk'
import inApi from '../../api'


const READ = 'infoCatListRead/READ'
const READ_FAIL = 'infoCatListRead/READ_FAIL'
const READ_SUCCESS = 'infoCatListRead/READ_SUCCESS'


const stateInit = {
  error: null,
  items: [],
}


const infoCatListReadRedux = handleActions({
  [READ_FAIL]:(state, { payload: error, }) => ({ //params: state, action
    ...state,
    error,
  }),
  [READ_SUCCESS]:(state, { payload: items, }) => ({
    ...state,
    items,
  }),
}, stateInit)


infoCatListReadRedux.read = inThunk.createReq(READ, inApi.info.readCatList)


export default infoCatListReadRedux