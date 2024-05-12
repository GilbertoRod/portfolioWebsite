import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJs, faNodeJs, faReact, faPhp,faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { MongoIcon } from '../assets/MongoDbIcon';
import { python } from '../assets/pythonIcon';
import { java } from '../assets/javaIcon';
import { flask } from '../assets/flaskIcon';


function DisplayIcon({icon}) {

    switch(icon){
        case "java":
            return(java)
        case "python":
            return(python)
        case "flask":
            return(flask)
        case "mongodb":
            return(MongoIcon)
        case "sql":
            return <FontAwesomeIcon icon={faDatabase} color='#e06c1a'/>
        case "css":
            return <FontAwesomeIcon icon={faCss3Alt} color='#254bdd'/>
        case "html":
            return <FontAwesomeIcon icon={faHtml5} color='#dd4b25'/>
        case "js":
            return <FontAwesomeIcon icon={faJs} color='#f0dc4e'/>
        case "git":
            return <FontAwesomeIcon icon={faGitAlt} color='#f05030'/>
        case "node":
            return <FontAwesomeIcon icon={faNodeJs} color='#529f41'/>
        case "react":
            return <FontAwesomeIcon icon={faReact} color='#00d8ff'/>
        case "php":
            return <FontAwesomeIcon icon={faPhp} color='#7377ad'/>
        case "laravel":
            return <FontAwesomeIcon icon={faLaravel} color='red'/>
        default:
            break;
    }





  return (
    <div>{icon}</div>
  )
}

export default DisplayIcon