import React, { useEffect } from 'react'
import InfoListCom from './InfoListCom'
import { useDispatch, useSelector } from 'react-redux'
import infoListReadRedux from '../../../redux/info/infoListReadRedux'

const InfoListCont = () => {

  const { error, items, pageLast, } = useSelector(({ infoListReadRedux, }) => ({
    error: infoListReadRedux.error,
    items: infoListReadRedux.items,
    pageLast: infoListReadRedux.pageLast,
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(infoListReadRedux.read({ page: 1 }))
  }, [dispatch])

  // const items = [ { content: 'foo', id: 1, title: 'foo', }, ]

  const onTouchEnd = (e) => {
    readItems()
  }

  const readItems = () => {
    console.log('readItems complete')
  }

  return (
    <div onTouchEnd={onTouchEnd}>

      <button onClick={readItems}>pull to refresh</button>

      <InfoListCom error={error} items={items} pageLast={pageLast} />

    </div>
  )
}

export default InfoListCont