import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const InfoListItemCom = ({ children, item, }) => {

  const { content, _id, title } = item

  return (
    <div className="info-list-item">
      { children }
      <Link to={`/info/${_id}`}>
        <div className="info-list-item-title">{title}</div>
      </Link>
      <div className="info-list-item-content">{content}</div>
    </div>
  )
}

InfoListItemCom.defaultProps = {
  item: {
    children: null,
    content: '',
    _id: 0,
    title: ''
  }
}

InfoListItemCom.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.node,
    content: PropTypes.string,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string
  }),
}

export default React.memo(InfoListItemCom)
