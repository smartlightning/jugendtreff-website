import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ label, icon: Icon, iconPosition, color, onClick }) => {
  return (
    <button
      className={`flex items-center p-2 rounded focus:outline-none ${color}`}
      onClick={onClick}
    >
      {iconPosition === 'left' && <Icon className="h-5 w-5 mr-2" />}
      <span>{label}</span>
      {iconPosition === 'right' && <Icon className="h-5 w-5 ml-2" />}
    </button>
  )
}

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  color: PropTypes.string,
  alignment: PropTypes.string,
  onClick: PropTypes.func,
}

IconButton.defaultProps = {
  iconPosition: 'left',
  color: 'text-gray-500 hover:text-gray-700',
}

export default IconButton
