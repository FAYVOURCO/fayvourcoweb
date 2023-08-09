import React from 'react';
import {useRef} from 'react';
import "./Header.css";
import { Link} from 'react-router-dom';
import Logo from "../fayvourco-networks-logo.png"
import {FaBars, FaTimes} from 'react-icons/fa';


function Header() {

   const navRef = useRef();

   const showNavbar = () =>{
    navRef.current.classList.toggle("res");
   }
  return (
    
        <header >
          <div className='head1'>
            <img src= {Logo} alt='Fayvourco Networks Logo'/>
              <h1>
                Fayvourco Networks
              </h1>
          </div>
             

     
          <div className='nav' ref={navRef}>
            <Link to="/"><p>Home</p></Link>
            <Link to="aboutus"><p>About Us</p></Link>
            {/* <Link to="contactus"><p>Contact Us</p></Link> */}
            {/* <Link to="wedidit"><p>We did it!</p></Link>    */}
            <Link to="becomeamember"><p>Membership</p></Link>  
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes className='bt'/>
            </button>
            
          </div> 

          <button className='nav-btn'  onClick={showNavbar}>
            <FaBars className='bt'/>
          </button>
        </header>
     

  )
}

export default Header;