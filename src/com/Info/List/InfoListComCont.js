import React, { useState } from 'react'
import InfoListCom from './InfoListCom'

const InfoListComCont = () => {

  const [renderId, setRenderId] = useState(0)

  return (
    <div>

      <button onClick={() => setRenderId(renderId + 1)}>Render</button>

      <InfoListCom />

    </div>
  )
}

export default InfoListComCont