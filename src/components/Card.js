import React from 'react'

function Card({name,description,picture}) {
    return (
      <div className='card'>
        <img src={require(`../assets/${picture}`)} alt='Card' className="picture"/>
        <div className='card-details'>
          <h1 className='card-name'>{name}</h1>
          <p className='card-description'>{description}</p>
        </div>
      </div>
    )
}

export default Card