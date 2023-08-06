import React from 'react'
import "./Header.css";
import { Link} from 'react-router-dom';
import Logo from "../fayvourco_logo-removebg-preview.png"

function Header() {
  return (
     
        <header >
          <div className='head1'>
            <img src= {Logo} alt='Fayvourco Networks Logo'/>
            <h2><p>Fayvourco</p> <p>Networks</p></h2>
          </div>
             

     
          <div className='head2'>
            <Link to="/"><p>Home</p></Link>
            <Link to="aboutus"><p>About Us</p></Link>
            <Link to="contactus"><p>Contact Us</p></Link>
            <Link to="wedidit"><p>We did it!</p></Link>   
            <Link to="becomeamember"><p>Membership</p></Link>  
            </div> 
        </header>
     

  )
}

export default Header;