import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const InfoItemCom = ({ content, id, title, }) => {

  const [ form, setForm ] = useState({ foo: '', })

  let nav = useNavigate()

  const onChangeFoo = e => {
    const nextForm = { ...form, [e.target.name]: e.target.value, }
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

      <input type="text" name="foo" onChange={onChangeFoo} />

      <button onClick={onClickBack}>back</button>

    </div>
  )
}

InfoItemCom.defaultProps = {
  content: '',
  id: '',
  title: '',
}

InfoItemCom.propTypes = {
  content: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
}

export default InfoItemCom