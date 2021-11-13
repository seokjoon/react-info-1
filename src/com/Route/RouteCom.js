import React from 'react'
import inConst from '../../helper/inConst'
import { Link, Route, Routes } from 'react-router-dom'
import InfoCom from '../Info/InfoCom'
import IndexCom from '../IndexCom'

const RouteCom = () => {

  const path = inConst.pathPublic

  return (
    <div>
      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={`${path}`}>Index</Link> </li>
          <li> <Link to={`${path}/info`}>info</Link> </li>
        </ul>
      </div>
      <div style={{float:'left', width: '70%',}}>
        <Routes>
          <Route path={`${path}`} element={<IndexCom />} exact />
          <Route path={`${path}/info`} element={<InfoCom />} />
        </Routes>
      </div>
      <div style={{clear: 'both'}}> </div>
    </div>
  )
}

export default RouteCom