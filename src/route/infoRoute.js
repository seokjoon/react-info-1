import InfoCom from '../com/Info/InfoCom'
import inConst from '../helper/inConst'
import InfoItemComCont from '../com/Info/Item/InfoItemComCont'

const infoRoute = {
  path: inConst.path.info,
  children: [
    { path: '', element: <InfoCom/> },
    { path: ':id', element: <InfoItemComCont/> },
  ],
}

export default infoRoute