import React, { useCallback, useEffect } from 'react'
import InfoCatListCom from './InfoCatListCom'
import { useDispatch, useSelector } from 'react-redux'
import infoCatListReadRedux from '../../../redux/info/infoCatListReadRedux'

const InfoCatListCont = () => {

  const dispatch = useDispatch()

  const { error, items, } = useSelector(({ infoCatListReadRedux }) => ({
    error: infoCatListReadRedux.error,
    items: infoCatListReadRedux.items,
  }))

  const readItems = useCallback(() => {
    console.log('readItems')
    dispatch(infoCatListReadRedux.read({}))
  }, [dispatch])

  useEffect(() => {
    readItems()
  }, [readItems])

  return (
    <InfoCatListCom error={error} items={items} />
  )
}

export default InfoCatListCont