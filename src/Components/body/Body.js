import React from 'react'
import "./Body.css"
import About from './about/About'
import Project from './projects/Project'
import Skills from './skills/Skills'
import Work from './work/Work'
import Contact from './contact/Contact'
const Body = () => {
  return (
    <div className='body'>
    
    <section id='about'>
        <About/>
    </section>
    <section id='aboutwork'>
          <Work/>
    </section>
   
    <section id='project'>
        <Project/>
    </section>

    <section id='skills'>
         <Skills/>
    </section>
    

   

    <section id='contact'>

      <Contact/>

    </section>
    </div>
  )
}

export default Body