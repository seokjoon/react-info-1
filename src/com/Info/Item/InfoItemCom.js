import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const InfoItemCom = ({ content, id, title, }) => {

  const [ form, setForm ] = useState({ foo: '', bar: '' })

  const { foo, bar } = form

  let nav = useNavigate()

  const onChangeForm = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(nextForm)
  }

  const onClickBack = () => {
    nav(-1)
  }

  useEffect(() => {
    console.log(form)
  }, [ form ])

  return (
    <div>
      <div> <input type="text" name="foo" value={foo} onChange={onChangeForm} /> </div>
      <div> <input type="text" name="bar" value={bar} onChange={onChangeForm} /> </div>
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