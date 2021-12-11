import inConst from '../helper/inConst'
import InfoCatListCont from '../com/InfoCat/List/InfoCatListCont'

const infoRoute = {
  path: inConst.path.infoCat,
  children: [
    { path: '', element: <InfoCatListCont /> },
  ],
}

export default infoRoute