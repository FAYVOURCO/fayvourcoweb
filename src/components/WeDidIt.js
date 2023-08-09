import React from 'react'
import "./WeDidIt.css";
import { Link} from 'react-router-dom';
import Projectdetails from "../jsondatabase/projectdetails.json";
 

function WeDidIt() {
  return (
 <div className='proj'>
  <h2>Projects/Products</h2>
    <div className='projects'>
      
      {
      
        Projectdetails.map( project => {
          return(

            <div className='project' key = {project.id}>
                  <div className='p1'>
                    <p className='project-name'>{ project.projectName }</p>
                    <p className='project-type'>{ project.productType }</p>
                  </div>
                  
                  <hr/> 
 
                  <div className='p2'>
                    <p><Link to="/aboutproject">About</Link></p>
                    <p><a href= {project.productLink}>See Product</a></p>
                    <p>Meet the team  </p>
                  </div>

                </div>
 
          )
        })
        
      }
      

     
    </div>
    </div>
  )
}
 
export default WeDidIt;