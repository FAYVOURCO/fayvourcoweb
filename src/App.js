import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import WeDidIt from "./components/WeDidIt";
import BecomeAMember from "./components/BecomeAMember";
import AboutProject from "./components/AboutProject";


function App() {
  return (
    
    <BrowserRouter> 
    <div className="body">
       <Header/>
  
        <Routes>
         <Route exact path="/" Component={Home}/>
         <Route  path="/aboutus" Component={AboutUs}/>  
         <Route  path="/contactus" Component={ContactUs}/>  
         <Route  path="/wedidit" Component={WeDidIt}/>  
         <Route  path="/becomeamember" Component={BecomeAMember}/> 
         <Route  path="/aboutproject"  Component={AboutProject}/>
          
        </Routes>
    </div>
       
        
        
     
     </BrowserRouter>
    
  );
}


export default App;
