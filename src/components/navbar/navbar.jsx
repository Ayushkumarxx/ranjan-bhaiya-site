import React from 'react'
import './navbar.css'
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  return (
    <nav>
        <div className="headNlinks">
           <div className="head">
             RS
           </div>
           <div className="links">
              <ol>
                <li><a href="#">OUR STORY</a></li>
                <li><a href="#">PHOTOS ALBUM</a></li>
                <li><a href="#">CONTACT</a></li>
                <li><a href="#">SERVICES</a></li>
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