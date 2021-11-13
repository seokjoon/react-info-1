import React from 'react'
import inConst from '../../helper/inConst'
import { Link, } from 'react-router-dom'
import InRoute from '../../route'


const RouteCom = () => {

  return (
    <div>

      <div style={{float:'left', width: '30%',}}>
        <ul>
          <li> <Link to={inConst.path.index}>Index</Link> </li>
          <li> <Link to={inConst.path.info}>info</Link> </li>
        </ul>
      </div>

      <div style={{float:'left', width: '70%',}}>
        <InRoute />
      </div>

      <div style={{clear: 'both'}}> </div>

    </div>
  )
}


export default RouteCom