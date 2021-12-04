import React from 'react'
import InfoListItemCom from './InfoListItemCom'

const InfoListCom = ({ items, }) => {

  const outItems = items.map((item) => (
    <InfoListItemCom item={item} key={item.id}>
      child
    </InfoListItemCom>
  ))

  return (
    <div className="info-list">
      {outItems}
    </div>
  )
}

export default React.memo(InfoListCom)