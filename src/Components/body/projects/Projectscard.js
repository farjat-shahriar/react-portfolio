import React from 'react'
import   './Projectscard.css'
const Projectscard = ({props}) => {
  return (
   
   <div className="project-card">
    <div className='project-info'> 
     <label className='project-title'>{props.title}</label>
     <div className='project-links' >
  {props.demo&&(
  <a className='project-link' href={props.demo} target="_blank">
     <div className='link-button'>
       <i className='fi-rr-globe'></i>Live
     </div>
    
</a>)}
  {props.github&&(
  <a className='project-link' href={props.github} target="_blank">
     <div className='link-button'>
        <i class="devicon-github-original colored"></i>Github
     </div>
    
    </a>)}
     </div>
     <div className='pera'> <p >{props.about}</p></div>
 
     <div className="projects-tag">{props.tags.map((tag)=>{
       return(
         <label className='tag'>{tag}</label>
       )
                                       
     })}</div>
   </div>
    <img src={props.image}className="project-photo"/>
   </div>
      
  )
}

export default Projectscard