import React from 'react'
import   './Skills.css'
import Sparetor from '../../common/separator/index'
import {skillsdata} from '../../data/skills'
import Skillcard from './Skillcard'
const Skills = () => {

  const data= skillsdata;
  return (
    <div className='skills'>
      <Sparetor/>
      <label className='section-title'>Skills</label>
      <div className='skills-container'>
        {data.map((item)=>{
         return(
          <div className="skills-section">
            <label className='skills-section-title'>{item.type}</label>
            <div className="skills-list">
              {item.list.map((skill)=>{
                   return(
                    <Skillcard skill={skill}/>
                   )
              })}
            </div>
          </div>
         )
        })}

      </div>
    </div>
  )
}

export default Skills