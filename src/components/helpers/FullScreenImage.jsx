import React from 'react'

const FullScreenImage = ({ image }) => {
  return (
    <div className="full-screen-image">
      <img src={image.url} alt="Full Screen" />
    </div>
  )
}

export default FullScreenImage
