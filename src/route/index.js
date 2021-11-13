import React from 'react'
import inConst from '../helper/inConst'
import { useRoutes } from 'react-router-dom'
import IndexCom from '../com/IndexCom'
import infoRoute from './infoRoute'


const InRoute = () => {

  const indexRoute = {
    path: inConst.path.index,
    element: <IndexCom /> ,
  }

  return useRoutes([
    indexRoute,
    infoRoute,
  ])
}


export default InRoute