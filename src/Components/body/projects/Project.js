import React from 'react'
import { Projectsdata } from '../../data/Projects';
import  './Project.css';
import Projectscard from './Projectscard';
import Sparetor from '../../common/separator/index'

const Project = () => {
  const data= Projectsdata;
  return (
    <div className='projects'>
      <Sparetor/>
      <label className='section-title'>Projects</label>
      <div>
    {  data.map((props)=>{
           return <Projectscard props={props} />
       })}
      </div>
    </div>
  )
}

export default Project