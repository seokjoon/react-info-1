import React from 'react'
import InfoListItemCom from './InfoListItemCom'

const InfoListCom = ({ items }) => {

  const outsItems = items.map((item, idx) => (
    <InfoListItemCom item={item} key={idx}>

      child

    </InfoListItemCom>
  ))

  return (
    <div className="info-list">
      {outsItems}

    </div>
  )
}

InfoListCom.defaultProps = {
  items: [
    { content: 'foo', id: 1, title: 'foo', },
    { content: 'bar', id: 2, title: 'bar', },
  ],
}

export default InfoListCom