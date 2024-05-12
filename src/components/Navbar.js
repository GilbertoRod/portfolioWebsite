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
          <div className='navbar' data-aos='zoom-in-right' data-aos-duration='800' >
              <div className='hamburger' onClick={toggleSidebar}>
                  {!sidebar ? <FontAwesomeIcon icon={faBarsStaggered} /> :
                      <div onClick={toggleSidebar}>
                          <FontAwesomeIcon icon={faTimes} /> 
                      </div>
                  }
              </div>
              <p>GR</p>
              <ul>
                  <a href='https://drive.google.com/file/d/1nahaf3Nlh-BVS0Wz7I9zVJ5NOMHHKWso/view?usp=sharing' target='_blank' rel='noreferrer'>
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
                      <a href='https://drive.google.com/file/d/1nahaf3Nlh-BVS0Wz7I9zVJ5NOMHHKWso/view?usp=sharing' target='_blank' rel='noreferrer'>
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
