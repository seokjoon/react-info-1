import InfoCom from '../com/Info/InfoCom'
import inConstPath from '../helper/inConstPath'
import InfoItemCont from '../com/Info/Item/InfoItemCont'

const infoRoute = {
  path: inConstPath.info,
  children: [
    { path: '', element: <InfoCom/> },
    { path: ':id', element: <InfoItemCont/> },
  ],
}

export default infoRoute
