import React from 'react'

const InfoCatListCom = ({ error, items, }) => {

  const outErr = ( <div>{ JSON.stringify(error) }</div> )

  const outItems = items.map(item => (
    <div key={item._id}>{ item.title && item.title }</div>
  ))

  return (
    <div>
      InfoCatListCom

      { outItems }

      { error && outErr }

    </div>
  )
}

export default InfoCatListCom
