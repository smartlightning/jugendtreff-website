import React from 'react';
import Logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='http://christadelphians.de/'>
          <img
            src={Logo}
            width='150'
            height='40'
            style={{ objectFit: 'cover' }}
            alt='logo of youthgroup'
          />
        </a>

        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar-app'
          href='/'>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbar-app' className='navbar-menu'>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>

          <Link to='/unser-glaube' className='navbar-item'>
            Unser Glaube
          </Link>
          <Link to='/events' className='navbar-item'>
            Events
          </Link>
          <Link to='/contact-us' className='navbar-item'>
            {' '}
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
