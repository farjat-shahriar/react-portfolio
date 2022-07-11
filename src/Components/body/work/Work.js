import React from 'react'
import Sparetor from '../../common/separator/index'
import './Work.css'
const Work = () => {
  return (
    <div className='about'>
      <Sparetor />
      <label className='section-title'>About</label>
      <div className='about-top-a'>

        <div className='about-photo-a'> <img src={require('../../../picture/fs.jpg')} className="picture1" />

        </div>
        <div className='about-info-about'>
          <p className='para'>  Hello, My name is Farjat Shahriar! I'm a front end developer. My job is to build your website so that it is functional and user-friendly but at the same time attractive.<br/></p>

        <p className='para1'>I have a strong passion for the creativity and discipline that goes into front-end development. Keeping in mind scalability and clean code that is maintainable and readable.<br/>  </p>

     <p className='text-item-1'> In my free time, I enjoy being outdoors, listening to music, traveling and experiencing new and exciting adventures. </p>
          

     <div className="contact-right">
        <a href={require('../../../picture/resume.pdf')} target="_blank" className='downloaded' download="download">Download CV</a>
        </div>

        </div>
        
      </div>
      

    </div>
  )
}

export default Work
