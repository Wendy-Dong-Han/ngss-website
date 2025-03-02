import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <Link to='/' className='header-title'>
        North Georgia Strings Studio
      </Link>
      <div className='header-buttons'>
        <Link to = '/about' className='header-button'>
          About
        </Link>
        <Link to='/instructors' className='header-button'>
          Instructors
        </Link>
      </div>
    </div>
  )
}

export default Header
