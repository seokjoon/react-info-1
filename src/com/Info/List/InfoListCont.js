import React, { useCallback, useEffect } from 'react'
import InfoListCom from './InfoListCom'
import { useDispatch, useSelector } from 'react-redux'
import infosReadRedux from '../../../redux/info/infosReadRedux'

const InfoListCont = () => {

  const dispatch = useDispatch()

  const { error, items, pageLast, } = useSelector(({ infosReadRedux, }) => ({
    error: infosReadRedux.error,
    items: infosReadRedux.items,
    pageLast: infosReadRedux.pageLast,
  }))

  const readItems = useCallback(() => {
    console.log('readItems')
    dispatch(infosReadRedux.read({ page: 1 }))
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
