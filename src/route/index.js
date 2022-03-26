import React from 'react'
import inConstPath from '../helper/inConstPath'
import { useRoutes } from 'react-router-dom'
import infoRoute from './infoRoute'
import RouteCom from '../com/Route/RouteCom'
import infoCatRoute from './infoCatRoute'
import userRoute from './userRoute'

const InRoute = () => {

  const indexRoute = {
    path: inConstPath.index,
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
