import inConstPath from '../helper/inConstPath'
import InfoCatListCont from '../com/InfoCat/List/InfoCatListCont'

const infoRoute = {
  path: inConstPath.infoCat,
  children: [
    { path: '', element: <InfoCatListCont /> },
  ],
}

export default infoRoute
