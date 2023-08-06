import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WeDidIt from "./components/WeDidIt";
import BecomeAMember from "./components/BecomeAMember";


function App() {
  return (
    
    <BrowserRouter> 
        <Header/>
  
        <Routes>
         <Route exact path="/" Component={Home}/>
         <Route  path="/aboutus" Component={AboutUs}/>  
         <Route  path="/contactus" Component={ContactUs}/>  
         <Route  path="/wedidit" Component={WeDidIt}/>  
         <Route  path="/becomeamember" Component={BecomeAMember}/> 
          
        </Routes>
        
        
     
     </BrowserRouter>
    
  );
}


export default App;
