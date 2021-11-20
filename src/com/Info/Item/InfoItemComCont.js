import React, { useEffect } from 'react'
import InfoItemCom from './InfoItemCom'

const InfoItemComCont = () => {

  useEffect(() => {
    console.log('InfoItemComCont')
  }, [])

  return (
    <div>

      infoItemComCont
      <InfoItemCom />

    </div>
  )
}

export default InfoItemComCont