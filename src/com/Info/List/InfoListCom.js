import React from 'react'
import InfoListItemCom from './InfoListItemCom'

const InfoListCom = ({ error, items, pageLast, }) => {

  const outItems = items.map((item) => (
    <InfoListItemCom item={item} key={item.id}>
      child
    </InfoListItemCom>
  ))

  return (
    <div className="info-list">

      { (error) && <div>{JSON.stringify(error)}</div> }

      { outItems }

      { (pageLast) && <div>pageLast</div> }

    </div>
  )
}

export default React.memo(InfoListCom)