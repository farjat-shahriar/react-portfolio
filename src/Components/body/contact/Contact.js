import React from 'react'
import Sparetor from '../../common/separator/index'
import SocialConact from '../../common/social-contact/SocialConact'
import  './Contact.css'
const Contact = () => {

  return (
    <div className='contact'>
      <Sparetor/>
      <label className='section-title'>Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform </p>
         
        </div>
       
        {/* <div className="contact-right">
        <a href={require('../../../picture/resume.pdf')} className='download' download="download">Download CV</a>
        </div> */}
      </div>

      <SocialConact />
    </div>
  )
}

export default Contact