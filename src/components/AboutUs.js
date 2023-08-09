import React from 'react'
import "./AboutUs.css";
import Favour from "../IMG_a60foi.jpg";
 

function AboutUs() {
  return (
    <div className="ab1">
         <div className='aboutus-body'>
      <h2>ABOUT US</h2>
    <div className='article'>
            <div>
                <h3>Vision</h3>
                <p>A global network of individuals who are dedicated to ﬁnding and implementing solutions to problems faced by individuals, organisations and societies.</p>
              </div>

              <div>
                <h3>Mission</h3>
                <p>Leveraging on networking and communication to build solutions and solve problems faced by individuals, organisations and societies.</p>
              </div>
    </div>
     
 
      <div className='article'>
        <h3>Community Overview</h3>
        <p>Fayvourco Networks presents an innovative platform catering to the needs of white-collar professionals, Intrapreneurs, and Entrepreneurs seeking an alternative to conventional high-pressure work environments. Our ecosystem fosters collaboration, providing a conducive space for diverse talents to converge and co-create.
          <br/><br/>

In this unique setting, Intrapreneurs and Entrepreneurs have the freedom to engage in projects and products aligned with their passions, fitting seamlessly into their schedules and aligning with their short-term and long-term objectives. Concurrently, our community of dedicated white-collar individuals collaborates harmoniously to ensure the seamless and efficient functioning of Fayvourco.
<br/><br/>

We firmly believe that this symbiotic model offers a more gratifying and sustainable approach to work, nurturing personal growth and professional fulfillment. Our unwavering commitment lies in empowering each member to realize their aspirations and accomplishments.
<br/><br/>


Embrace a transformative paradigm with Fayvourco Networks, where innovation thrives and success is collectively forged. Partner with us in redefining the future of work, one collaborative endeavor at a time.</p>
      </div>

      <div className='article'>
        <h3>Meet the CEO/Founder</h3>

        <div>
        <img src ={Favour} alt='Favour Onyeaghala, CEO/FOUNDER fayvourco networks' className='favour'/>
        </div>
        <p>Favour Onyeaghala, a seasoned Product Manager at Fayvourco Networks, brings a dynamic blend of expertise in Web Development and UI/UX design. Driven by an insatiable thirst for learning, he constantly challenges himself to surpass boundaries. Currently pursuing studies in marine engineering at the University of Benin, Favour epitomizes the fusion of diverse knowledge streams.
        <br/><br/>

A fervent believer in the power of determination, Favour radiates motivation and a results-centric mindset. His unwavering commitment to his craft is evident in his work ethic. With a collaborative spirit, he readily extends a helping hand to his peers, epitomizing a true team player.
<br/><br/>

Favour's ardor lies in harnessing his proficiencies to create positive change in the world. Beyond his professional pursuits, he channels his creativity into the realm of music. Favour aspires to drive transformation alongside his dream team.
<br/><br/>

Join us in embarking on this journey of innovation and impact, guided by the visionary leadership of Favour Onyeaghala.
<br/>
          Linkedin: <a href='https://www.linkedin.com/in/fav99' target='blank'>Favour Onyeaghala </a>
          <br/>
          Email: <a href='mailto:onyeaghalafavourr@gmail.com' target='blank'>onyeaghalafavourr@gmail.com</a>
        </p>
        
      </div>

      <div className='article'>
        <h3>Contact Us</h3>
        <div className='socials'>
          <p>
         Linkedin: <a a href='https://www.linkedin.com/company/fayvourco-networks' target='blank'>Fayvourco Networks</a>
         </p> <br/>
         <p>
          Email:<a href='mailto:fayvourconetworks@gmail.com'>fayvourconetworks</a>
          </p>
        </div>
      </div>

    </div>
    </div>
   

  )
}

export default AboutUs;