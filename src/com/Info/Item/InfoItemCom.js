import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import useInInputHook from '../../../hook/useInInputHook'

const InfoItemCom = ({ content, id, title, }) => {

  const [state, onChange] = useInInputHook({ foo: '', bar: '', })

  const { foo, bar } = state

  let nav = useNavigate()

  const onClickBack = () => {
    nav(-1)
  }

  useEffect(() => {
    console.log(state)
  }, [ state ])

  return (
    <div>
      <div> <input type="text" name="foo" value={foo} onChange={onChange} /> </div>
      <div> <input type="text" name="bar" value={bar} onChange={onChange} /> </div>
      <button onClick={onClickBack}>back</button>
    </div>
  )
}

InfoItemCom.defaultProps = {
  content: 'content',
  id: 0,
  title: 'title',
}

InfoItemCom.propTypes = {
  content: PropTypes.string,
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
}

export default InfoItemCom