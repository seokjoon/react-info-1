import React, { useEffect } from 'react'
import InfoItemCom from './InfoItemCom'
import useInInputHook from '../../../hook/useInInputHook'
import { useNavigate } from 'react-router-dom'

const InfoItemCont = () => {

  const [state, onChange] = useInInputHook({ foo: '', bar: '', })

  const { foo, bar } = state

  let nav = useNavigate()

  const onClickBack = () => {
    nav(-1)
  }

  useEffect(() => {
    console.log(state)
  }, [ state ])

  useEffect(() => {
    console.log('InfoItemComCont')
  }, [])

  return (
    <div>

      infoItemComCont
      <InfoItemCom foo={foo} bar={bar} onChange={onChange} onClickBack={onClickBack} />

    </div>
  )
}

export default InfoItemCont