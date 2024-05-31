import './styles/Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="hero-background-stars">
                <img className="stars" src={require('../assets/stars.png')}/>
            </div>
            <div className='hero-container'>
                <div className='intro'>
                    <div className='greeting' >
                        Hello There! I'm <span style={{color:"white"}}>Gilberto</span>
                    </div>
                    <div className='hero-title'>
                        <p>A <span>Software Engineer</span> In The Dallas-Fort Worth Area. Helping Companies And Individuals Launch Their Websites!</p>
                    </div>
                    <div className='hero-about'>
                        <p>I'm a 23 year old Software Engineer with a Bachelor's Degree in Computer Science. I'm experienced in working with individuals and businesses to help create their product websites. I also have experience in leading and collaborating with other software engineers to complete projects within given deadlines.</p>

                    </div>

                </div>
                <img src={require('../assets/Avatar.png')} alt='Avatar Pic' className='hero-img'/>
            </div>
        </div>

    )
}

export default Hero