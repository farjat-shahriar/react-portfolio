import React from 'react'
import SocialConact from '../../common/social-contact/SocialConact'
import "./About.css"
const About = () => {
  return (
    <div className='about'>
       <div className='about-top'>
       
         <div className='about-info'>
           
           Hello There, I am <br/><span className='name'>Farjat Shahriar</span> 
          <br/> I love experimenting with the Web
           </div>
         <div className='about-photo'></div>
           <img src={require('../../../picture/design.jpg')} className="picture"/>
       </div>
        
        <SocialConact/>
    </div>
  )
}

export default About
