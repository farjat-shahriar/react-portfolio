import React from 'react'
import "./Header.css"
import Mobile from './mobile/mobile'
import Web from './web/web'
import {useState} from 'react'
const Header = () => {
  const [isopen, setisopen] = useState(false)
  return (
    <div className='header'>
      <div className='logo'>
        Farjat Shahriar
      </div>

      <div className='menu'>
       <div className='web-menu'>
         <Web/>
       </div>
        
        <div className='mobile-menu'>
      <div onClick={()=>{setisopen(!isopen)}}>
      <i class="fi fi-rr-apps menu-icon"></i>
      </div>
          {isopen&&<Mobile isopen={isopen} setisopen={setisopen}/>}
        </div>
      </div>
    </div>
  )
}

export default Header