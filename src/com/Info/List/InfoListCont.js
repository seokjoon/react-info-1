import React, { useCallback, useEffect } from 'react'
import InfoListCom from './InfoListCom'
import { useDispatch, useSelector } from 'react-redux'
import infoListReadRedux from '../../../redux/info/infoListReadRedux'

const InfoListCont = () => {

  const dispatch = useDispatch()

  const { error, items, pageLast, } = useSelector(({ infoListReadRedux, }) => ({
    error: infoListReadRedux.error,
    items: infoListReadRedux.items,
    pageLast: infoListReadRedux.pageLast,
  }))

  const readItems = useCallback(() => {
    console.log('InfoListCont.readItems')
    dispatch(infoListReadRedux.read({ page: 1 }))
  }, [dispatch])

  useEffect(() => {
    readItems()
  }, [readItems])

  return (
    <div onTouchEnd={readItems}>

      <button onClick={readItems}>pull to refresh</button>

      <InfoListCom error={error} items={items} pageLast={pageLast} />

    </div>
  )
}

export default InfoListCont