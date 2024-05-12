import React from 'react'
import './styles/Technologies.css'
import DisplayIcon from './DisplayIcon';








function Technologies() {
    return (
      <div className='tech-container'>
        <div className='section-title' data-aos='zoom-in'>
          <p>TECHNOLOGIES</p>
        </div>

        <div className='tech-logos' data-aos='wiggle'  >
          <div className='technology'>
            <DisplayIcon icon="html"/>
            <p>HTML</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="css"/>
            <p>CSS</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="js"/>
            <p>JavaScript</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="react"/>
            <p>React</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="node"/>
            <p>Node.JS</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="git"/>
            <p>git</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="sql"/>
            <p>SQL</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="mongodb"/>
            <p>MongoDB</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="python"/>
            <p>Python</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="flask"/>
            <p>Flask</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="java"/>
            <p>Java</p>
          </div>
          <div className='technology'>
            <DisplayIcon icon="php"/>
            <p>php</p>
          </div>
          
        </div>
      </div>
    )
}

export default Technologies