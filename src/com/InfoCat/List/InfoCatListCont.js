import React, { useCallback, useEffect } from 'react'
import InfoCatListCom from './InfoCatListCom'
import { useDispatch, useSelector } from 'react-redux'
import infoCatsReadRedux from '../../../redux/info/infoCatsReadRedux'

const InfoCatListCont = () => {

  const dispatch = useDispatch()

  const { error, items, } = useSelector(({ infoCatsReadRedux }) => ({
    error: infoCatsReadRedux.error,
    items: infoCatsReadRedux.items,
  }))

  const readItems = useCallback(() => {
    console.log('readItems')
    dispatch(infoCatsReadRedux.read({}))
  }, [dispatch])

  useEffect(() => {
    readItems()
  }, [readItems])

  return (
    <InfoCatListCom error={error} items={items} />
  )
}

export default InfoCatListCont
