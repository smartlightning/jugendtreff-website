import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div class='navbar-brand'>
        <a class='navbar-item' href='http://christadelphians.de/'>
          <img
            src= {Logo}
            width='150'
            height='40'
            style= {{objectFit: 'cover'}}
            alt= 'example image'
          />
        </a>

        <a
          role='button'
          class='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbar' class='navbar-menu'>
        <div class='navbar-end'>
          <Link to= '/' class='navbar-item'>Home</Link>

          <Link to= '/unser-glaube' class='navbar-item'>Unser Glaube</Link>
          <Link to= '/events' class='navbar-item'>Events</Link>
          <Link to= '/contact-us' class='navbar-item'> Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
