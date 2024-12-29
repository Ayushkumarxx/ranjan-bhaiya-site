import React from 'react'
import './navbar.css'
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <nav id='nav'>
        <div className="headNlinks">
           <div className="head ani-same-nav">
             RS
           </div>
           <div className="links">
              <ol>
                <li className='ani-same-nav'><a href="#">OUR STORY</a></li>
                <li className='ani-same-nav'><a href="#">PHOTOS ALBUM</a></li>
                <li className='ani-same-nav'><a href="#">CONTACT</a></li>
                <li className='ani-same-nav'><a href="#">SERVICES</a></li>
              </ol>
           </div>
        </div>
        <div className="direction">
           DIRECTION  <IoIosArrowRoundForward  className="arrow"/>
          
        </div>
        <div className="ham-icon">
              <div className="ham"></div>
              <div className="ham"></div>
           </div>
    </nav>
  )
}

export default Navbar