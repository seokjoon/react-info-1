import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const InfoListItemCom = ({ children, item, }) => {

  const { content, id, title } = item

  return (
    <div className="info-list-item">
      { children }
      <Link to={`/info/${id}`}>
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
    id: 0,
    title: ''
  }
}

InfoListItemCom.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.node,
    content: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string
  }),
}

export default React.memo(InfoListItemCom)
