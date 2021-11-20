import React from 'react'
import inConst from '../../helper/inConst'
import { Link, Outlet, } from 'react-router-dom'

const RouteCom = () => {

  return (
    <div>

      <div style={{ float: 'left', width: '30%', }}>
        <ul>
          <li><Link to={inConst.path.index}>Index</Link></li>
          <li><Link to={inConst.path.info}>info</Link></li>
        </ul>
      </div>

      <div style={{ float: 'left', width: '70%', }}>
        <Outlet/>
      </div>

      <div style={{ clear: 'both' }} />

    </div>
  )
}

export default RouteCom