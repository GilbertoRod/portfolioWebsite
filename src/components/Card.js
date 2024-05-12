import React from 'react'
import DisplayIcon from './DisplayIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function Card({name,description,picture,stack,git,site}) {
    return (
      <div className='card'  data-aos='flip-left' data-aos-duration='500'>
        <img src={require(`../assets/${picture}`)} alt='Card' className="picture"/>
        <div className='card-details'>
          <h1 className='card-name'>{name}</h1>
          <p className='card-description'>{description}</p>
          <div>
            <div className='stack-images'>
              <div>
              {stack&&stack.map((icon)=><div key={icon}><DisplayIcon icon={icon}/></div>)}
              </div>
              <div>
                {site&&<a className='web-link' href={site} target='_blank' rel="noreferrer"><FontAwesomeIcon color='var(--primary)' icon={faLink}/></a>}
                {git&&<a href={git} target='_blank' rel="noreferrer"><FontAwesomeIcon color='var(--primary)' icon={faGithub}/></a>}

              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Card