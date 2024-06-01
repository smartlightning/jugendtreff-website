import React from 'react'
import { Link } from 'react-router-dom'

const Events = () => {
  return (
    <div>
      <Link to="/events/gallery" class="navbar-item">
        Gallery
      </Link>
    </div>
  )
}

export default Events
