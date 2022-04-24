import React from 'react';
import Logo from '../assets/logo.jpg';


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
          <a class='navbar-item'>Home</a>

          <a class='navbar-item'>Unser Glaube</a>
          <a class='navbar-item'>Events</a>
          <a class='navbar-item'> Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
