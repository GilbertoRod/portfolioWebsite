import React from 'react'
import './styles/Technologies.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faReact, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { MongoIcon } from '../assets/MongoDbIcon';
import { python } from '../assets/pythonIcon';
import { java } from '../assets/javaIcon';
import { flask } from '../assets/flaskIcon';


export function TechUtility({name,icon,color}){
  if (name==="MongoDB"){
    return(
    <div className='technology'>
      <div>{MongoIcon}</div>
      <p>{name}</p>
    </div>)
  }
  if (name==="Python"){
    return(
    <div className='technology'>
      <div>{python}</div>
      <p>{name}</p>
    </div>)
  }
  if (name==="Java"){
    return(
    <div className='technology'>
      <div>{java}</div>
      <p>{name}</p>
    </div>)
  }
  if (name==="Flask"){
    return(
    <div className='technology'>
      <div>{flask}</div>
      <p>{name}</p>
    </div>)
  }
  return(
    <div className='technology'>
      <FontAwesomeIcon color={color} className='tech-icon' icon={icon}/>
      <p>{name}</p>
    </div>
  )
}





function Technologies() {
    return (
      <div className='tech-container'>
        <div className='section-title' data-aos='zoom-in'>
          <p>TECHNOLOGIES</p>
        </div>

        <div className='tech-logos' data-aos='wiggle'  >
          <TechUtility icon={faHtml5} name="HTML" color='#dd4b25'/>
          <TechUtility icon={faCss3Alt} name="CSS" color='#254bdd'/>
          <TechUtility icon={faJs} name="JavaScript" color='#f0dc4e'/>
          <TechUtility icon={faReact} name="React" color='#00d8ff'/>
          <TechUtility icon={faNodeJs} name="Node" color='#529f41'/>
          <TechUtility icon={faGitAlt} name="git" color='#f05030'/>
          <TechUtility icon={faDatabase} name="SQL" color='#e06c1a'/>
          <TechUtility name="MongoDB"/>
          <TechUtility name="Python"/>
          <TechUtility name="Flask"/>
          <TechUtility name="Java"/>
          <TechUtility icon={faPhp} name="php" color='#7377ad'/>

          
        </div>
      </div>
    )
}

export default Technologies