import React from 'react'
import './styles/Technologies.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCss3, faCss3Alt, faGitSquare, faHtml5, faJava, faJs, faMdb, faNodeJs, faPhp, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { MongoIcon } from '../assets/MongoDbIcon';


function NameAndLogo({name,icon}){
  if (name==="MongoDB"){
    return(
    <div className='technology'>
      <div>{MongoIcon}</div>
      <p>{name}</p>
    </div>)
  }
  return(
    <div className='technology'>
      <FontAwesomeIcon className='tech-icon' icon={icon}/>
      <p>{name}</p>
    </div>
  )
}





function Technologies() {
    return (
      <div className='tech-container'>
        <div className='tech-title'>
          TECHNOLOGIES
        </div>

        <div className='tech-logos'>
          <NameAndLogo icon={faHtml5} name="HTML"/>
          <NameAndLogo icon={faCss3Alt} name="CSS"/>
          <NameAndLogo icon={faJs} name="JavaScript"/>
          <NameAndLogo icon={faDatabase} name="SQL"/>
          <NameAndLogo name="MongoDB"/>
          <NameAndLogo icon={faReact} name="React"/>
          <NameAndLogo icon={faNodeJs} name="Node"/>
          <NameAndLogo icon={faPython} name="Python"/>
          <NameAndLogo icon={faJava} name="Java"/>
          <NameAndLogo icon={faGitSquare} name="git"/>



        </div>
      </div>
    )
}

export default Technologies