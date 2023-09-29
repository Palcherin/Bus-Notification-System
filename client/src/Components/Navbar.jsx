
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';




export function Navbars() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  


  

  return (
    
    <div className='navbar' > 

      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          BusNote
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes className='icons'/> : <FaBars className='icons'/>}
        </div>
          <Link to='/signuproute' className='btn-lit1' >
              Sin-In
            </Link>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/notice' className='nav-links' onClick={closeMobileMenu}>
              Notice
            </Link>
          </li>
         
          <li className='nav-item'>
            <Link to='/trackmap' className='nav-links' onClick={closeMobileMenu}>
              Track Bus
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/results' className='nav-links' onClick={closeMobileMenu}>
              Results
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              Contacts
            </Link>
          </li>
        </ul>
        <Link to='/meet' className='btn-lit1' >
              Send Notification
            </Link>
          
      </div>
    </div>
  );
}
