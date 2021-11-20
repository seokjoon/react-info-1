import React from 'react'
import inConst from '../helper/inConst'
import { useRoutes } from 'react-router-dom'
import infoRoute from './infoRoute'
import RouteCom from '../com/Route/RouteCom'

const InRoute = () => {

  const indexRoute = {
    path: inConst.path.index,
    element: <RouteCom/>,
    children: [
      infoRoute,
    ],
  }

  return useRoutes([
    indexRoute,
  ])
}

export default InRoute