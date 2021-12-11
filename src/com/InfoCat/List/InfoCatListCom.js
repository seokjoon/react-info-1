import React from 'react'

const InfoCatListCom = ({ error, items, }) => {

  const outItems = items.map(item => (
    <div>{ item.title && item.title }</div>
  ))

  return (
    <div>
      InfoCatListCom

      { (error) && <div>{ JSON.stringify(error) }</div> }

      { outItems }
    </div>
  )
}

export default InfoCatListCom