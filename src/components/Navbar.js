import React from 'react'
import'./styles/Navbar.css'

function Navbar() {
    return (
      <div className='nav-container'>
        <div className='navbar' data-aos='zoom-in-right' data-aos-duration='800' >
        <p>GR</p>
        <ul>
          <a href='https://drive.google.com/file/d/1nahaf3Nlh-BVS0Wz7I9zVJ5NOMHHKWso/view?usp=sharing' target='_blank'  rel='noreferrer'>
            <li>
              Resume
            </li>
          </a>
          <a href="mailto:betovenr17@gmail.com" target="_blank"  rel='noreferrer'>
            <li>
              Contact
            </li>
          </a>
        </ul>
        </div>
      </div>
    )
}

export default Navbar