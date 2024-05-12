import React from 'react'
import './styles/Projects.css'
import Card from './Card';

function Projects() {

    return (
      <div className='projects-container'>
      <div className='section-title'  data-aos='zoom-in' data-aos-offset='50'>
        <p>PROJECTS</p>
      </div>
      <div className='cards-wrapper' >
        
          <Card name='Heroes de Zipiajo' 
          description="Heroes de Zipiajo is a full-stack MERN website that I developed for a philanthropic sponsorship program in Zipiajo, Mexico. Using Express, MongoDB, and Node.js, I was able to build a REST API to support the backend functionalities. For security, I integrated JWT authentication, allowing only the Admin access to create, update, or delete donation records. Visitors can view donation statistics for all years, while only the Admin oversees and manages all contributions from every individual donor. I developed and customized the UI using React, I also ensured responsiveness across all screen sizes." 
          picture="Zipiajo.png" stack={["react","js","node","mongodb"]} git="https://github.com/GilbertoRod/HeroesDeZipiajo"/>

          <Card name='Secret Santa' 
          description="Secret Santa was a full Stack application that I built with the Python Flask Framework. Every style and feature was fully customized by me. With integrated user authentication, users are able to create a Secret Santa event and add other users to their event. Users can also send a request to join other events where the event coordinator would then either accept or decline their request. The event coordinator/creator is in charge of setting up to 10 fields that the participants will have to fill (ex. Favorite Color, Favorite Brand, Top Size, etc. ). Once all fields are filled by every participant, the coordinator would then start the event and each participant would then receive the name and information of a random person in the event. The algorithm for this feature prevents the participant from selecting themselves and also prevents a participant from being selected twice. I built this dynamic Website Application using Python, SQL, HTML, CSS, and JavaScript." 
          picture="secretsantafull.png" stack={["python","flask","sql","html","css"]} git="https://github.com/GilbertoRod/FlaskProj"/>


          <Card name='Tourney Manager' 
          description="Tourney Manager was a full-stack collaborative project that was created during my Junior year of University. I collaborated with three other individuals and we used the Laravel framework and the SCRUM agile system to develop our website application. We met in person every other week to discuss any different algorithms or features that we wanted to implement. This website application was intended for users to be able to create an account and create a tournament of different teams that allowed other users to join. I was in charge of the graphic design, the system sequence diagrams, and some of the front-end development for this project." git='https://github.com/TimHCooper/tourneymanager' 
          picture="tourney.png" stack={["php","laravel","sql","html","css"]}/>

          <Card name='Portfolio Website' 
          description="My portfolio website was built with React, JavaScript, and CSS. It's a functional component based website with each component respresenting a section of the website. It showcases my work with a responsive design so that it can properly be displayed on any device. I customized all features and integrated on scroll animations using the AOS library to enhance the UX. This website is a representation and display of my projects and skills, it's designed to impress potential employers and highlight my expertise in web development." 
          picture="myportfolio.png" git='https://github.com/GilbertoRod/portfolioWebsite' stack={['react',"js"]}/>

          <Card name='Smart Tech Experts' 
          description="This website was made for a home renovation contractor and was created using HTML, CSS, and JavaScript. I created this website from scratch and I used different media queries to make it fully responsive to different devices and screen sizes. The contractor wanted a website where they could display all of their work along with a page where potential clients can contact them. Using Netlify, I created a contact form that potential clients can fill out and ask the business owner about a quote or any other questions that they may have about the business owners' work. Everytime that the form gets submitted, the business owner receives an email that contains all of the filled out information." 
          picture="smart.png" git='https://github.com/GilbertoRod/SmartTechExperts' site='https://incomparable-tulumba-33562b.netlify.app/smarttechexpertsllc/index.html' stack={["js","html","css"]}/>

          <Card name='TillCount' 
          description="TillCount was a website that I created to help me countdown cash registers at my previous job. At my previous job, we had a policy where the supervisors were in charge of counting down the cash registers every time we wanted to have a different person on the register. This policy was made to ensure that the person wasn't short or over their expected cash amount. We counted them down using a calculator but this was very inefficient because any wrong input would mess up the entire calculation, this led me to create TillCount. Using HTML CSS and JavaScript, TillCount allows the user to insert the quantity of bills, coins, and rolls. Once the User clicks the calculate button, TillCount calculates the difference between the expected amount and the counted amount and then displays the Over/Short amount." 
          picture="tillcount.PNG" git='https://github.com/GilbertoRod/TillCount'  stack={["js","html","css"]} />

      </div>
    </div>
    )
}

export default Projects