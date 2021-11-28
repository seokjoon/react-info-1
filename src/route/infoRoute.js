import InfoCom from '../com/Info/InfoCom'
import inConst from '../helper/inConst'
import InfoItemCont from '../com/Info/Item/InfoItemCont'

const infoRoute = {
  path: inConst.path.info,
  children: [
    { path: '', element: <InfoCom/> },
    { path: ':id', element: <InfoItemCont/> },
  ],
}

export default infoRoute