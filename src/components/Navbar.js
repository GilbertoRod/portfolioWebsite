import React from 'react'
import'./styles/Navbar.css'

function Navbar() {
    return (
      <div className='nav-container'>
        <div className='navbar'>
        <p>GR</p>
        <ul>
          <a href='https://drive.google.com/file/d/1nahaf3Nlh-BVS0Wz7I9zVJ5NOMHHKWso/view?usp=sharing' target='_blank'>
            <li>
              Resume
            </li>
          </a>
          <a href="mailto:betovenr17@gmail.com" target="_blank">
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