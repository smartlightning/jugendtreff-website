import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import IconButton from '../helpers/IconButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800">
      <div className="flex items-center justify-between p-4">
        <a href="http://christadelphians.de/" className="flex items-center">
          <img
            src={Logo}
            alt="logo of youthgroup"
            className="h-10 w-auto object-cover"
          />
        </a>

        <div className="flex flex-row justify-center lg:hidden">
          {isOpen ? (
            <IconButton
              onClick={toggleMenu}
              icon={XMarkIcon}
              iconPosition="left"
              label="Close"
              color="text-gray-300 hover:text-white"
            />
          ) : (
            <IconButton
              onClick={toggleMenu}
              icon={Bars3Icon}
              iconPosition="left"
              label="Menu"
              color="text-gray-300 hover:text-white"
            />
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <NavLink to="/" className="text-gray-100 hover:text-white">
            Home
          </NavLink>
          <NavLink to="/unser-glaube" className="text-gray-100 hover:text-white">
            Unser Glaube
          </NavLink>
          <NavLink to="/events" className="text-gray-100 hover:text-white">
            Events
          </NavLink>
          <NavLink to="/events/gallery" className="text-gray-100 hover:text-white">
            Gallery
          </NavLink>
          <NavLink to="/contact-us" className="text-gray-100 hover:text-white">
            Kontakt
          </NavLink>
        </div>

        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-95 flex flex-col items-center justify-center lg:hidden z-50">
            <IconButton
              onClick={toggleMenu}
              icon={XMarkIcon}
              iconPosition="left"
              label="Close"
              color="absolute top-4 right-4 text-gray-300 hover:text-white"
            />
            <NavLink
              to="/"
              className="text-gray-100 hover:text-white text-xl my-4"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/unser-glaube"
              className="text-gray-100 hover:text-white text-xl my-4"
              onClick={toggleMenu}
            >
              Unser Glaube
            </NavLink>
            <NavLink
              to="/events"
              className="text-gray-100 hover:text-white text-xl my-4"
              onClick={toggleMenu}
            >
              Events
            </NavLink>
            <NavLink
              to="/events/gallery"
              className="text-gray-100 hover:text-white text-xl my-4"
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-gray-100 hover:text-white text-xl my-4"
              onClick={toggleMenu}
            >
              Kontakt
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
