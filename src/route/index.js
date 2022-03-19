import React from 'react'
import inConst from '../helper/inConst'
import { useRoutes } from 'react-router-dom'
import infoRoute from './infoRoute'
import RouteCom from '../com/Route/RouteCom'
import infoCatRoute from './infoCatRoute'
import userRoute from './userRoute'

const InRoute = () => {

  const indexRoute = {
    path: inConst.path.index,
    element: <RouteCom/>,
    children: [
      infoRoute,
      infoCatRoute,
      userRoute,
    ],
  }

  return useRoutes([
    indexRoute,
  ])
}

export default InRoute
