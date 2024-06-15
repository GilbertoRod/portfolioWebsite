import React, { useState } from 'react';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered, faTimes } from '@fortawesome/free-solid-svg-icons'; // Changed faX to faTimes

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
      setSidebar(!sidebar);
  };

  return (
      <div className='nav-container'>
          <div className='navbar'>
              <div className='hamburger' onClick={toggleSidebar}>
                  {!sidebar ? <FontAwesomeIcon icon={faBarsStaggered} /> :
                      <div onClick={toggleSidebar}>
                          <FontAwesomeIcon icon={faTimes} /> 
                      </div>
                  }
              </div>
              <p>GR</p>
              <ul>
                  <a href='https://drive.google.com/file/d/1MbkVH-ExzklaHaGDru2L3qjV-L_mJxDQ/view?usp=share_link' target='_blank' rel='noreferrer'>
                      <li>
                          Resume
                      </li>
                  </a>
                  
                  <a href="mailto:betovenr17@gmail.com" target="_blank" rel='noreferrer'>
                      <li>
                          Contact
                      </li>
                  </a>
              </ul>

              <div className={`sidebar ${sidebar ? 'active' : ''}`}>
                      <a href='https://drive.google.com/file/d/1MbkVH-ExzklaHaGDru2L3qjV-L_mJxDQ/view?usp=share_link'>
                          <h1>Resume</h1>
                        </a>

                        <a href="mailto:betovenr17@gmail.com" target="_blank" rel='noreferrer'>
                          <h1>Contact</h1>
                        </a>
                    </div>
          
            </div>
        </div>
    );
}

export default Navbar;
