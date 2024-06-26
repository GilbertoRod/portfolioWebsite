import './styles/Hero.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Hero() {
    return (


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


    )
}

export default Hero