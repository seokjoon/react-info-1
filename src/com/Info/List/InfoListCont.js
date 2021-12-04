import React from 'react'
import InfoListCom from './InfoListCom'

const InfoListCont = () => {

  const items = [
    { content: 'foo', id: 1, title: 'foo', },
    { content: 'bar', id: 2, title: 'bar', },
  ]

  const onTouchEnd = (e) => {
    readItems()
  }

  const readItems = () => {
    console.log('readItems complete')
  }

  return (
    <div onTouchEnd={onTouchEnd}>

      <button onClick={readItems}>pull to refresh</button>

      <InfoListCom items={items} />

    </div>
  )
}

export default InfoListCont