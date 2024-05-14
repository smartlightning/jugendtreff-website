import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <a href="http://christadelphians.de/" className="flex items-center">
          <img
            src={Logo}
            alt="logo of youthgroup"
            className="h-10 w-auto object-cover"
          />
        </a>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto`}
        >
          <div className="lg:flex lg:space-x-4">
            <NavLink
              exact
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/unser-glaube"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Unser Glaube
            </NavLink>
            <NavLink
              to="/events"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Events
            </NavLink>
            <NavLink
              to="/events/gallery"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white"
              activeClassName="text-white"
            >
              Kontakt
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
