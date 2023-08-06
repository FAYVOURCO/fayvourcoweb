import React from 'react'
import "./AboutUs.css";
import Favour from "../IMG_a60foi.jpg";
 

function AboutUs() {
  return (
    <div>
      <h2>ABOUT US</h2>

      <div>
        <h3>Vision</h3>
        <p>A global network of individuals who are dedicated to ﬁnding and implementing solutions to problems faced by individuals, organisations and societies.</p>
      </div>

      <div>
        <h3>Mission</h3>
        <p>Leveraging on networking and communication to build solutions and solve problems faced by individuals, organisations and societies.</p>
      </div>

      <div>
        <h3>Community Overview</h3>
        <p>Fayvourco Networks provides a platform for white-collar individuals, Intrapreneurs and Entrepreneurs who do not enjoy working in traditional high-pressure white-collar jobs to share their work and collaborate with others. </p>
        <p> Individuals work on projects/products that they are passionate about that fits with their schedule, short-term and long-term goals. We believe that this model provides a more fulfilling and sustainable way to work, and we are committed to helping our members achieve their goals.</p>
      </div>

      <div>
        <h3>Meet the CEO/Founder</h3>

        <div>
        <img src ={Favour} alt='Favour Onyeaghala, CEO/FOUNDER fayvourco networks' className='favour'/>
        </div>
        <p>Favour Onyeaghala is a self-taught software engineer and UI/UX designer with a passion for learning new skills and pushing himself to the limits. He is currently studying marine engineering at the University of Benin.

          Favour is a highly motivated and results-oriented individual with a strong work ethic. He is also a team player and is always willing to help others. He is passionate about using his skills to make a positive impact on the world.

          In his spare time, Favour enjoys making music.  Favour is confident that his skills and experience will make him a valuable asset to any team. He is eager make a difference in the world with his dream team here at Fayvourco Networks.

          Linkedin: Favour Onyeaghala 
          email: onyeaghalafavourr@gmail.com
        </p>
        
      </div>
    </div>

  )
}

export default AboutUs;