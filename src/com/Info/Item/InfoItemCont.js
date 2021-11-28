import React, { useEffect } from 'react'
import InfoItemCom from './InfoItemCom'

const InfoItemCont = () => {

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

export default InfoItemCont