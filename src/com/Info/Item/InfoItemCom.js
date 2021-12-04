import React from 'react'
import PropTypes from 'prop-types'

const InfoItemCom = ({ content, id, title, foo, bar, onClickBack, onChange, }) => {

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