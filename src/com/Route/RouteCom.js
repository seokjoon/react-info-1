import React from 'react'
import inConstPath from '../../helper/inConstPath'
import { Link, Outlet, } from 'react-router-dom'

const RouteCom = () => {

  const { index, info, infoCat, } = inConstPath

  return (
    <div>

      <div style={{ float: 'left', width: '30%', }}>
        <ul>
          <li><Link to={index}>Index</Link></li>
          <li><Link to={info}>info</Link></li>
          <li><Link to={infoCat}>infoCat</Link></li>
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
