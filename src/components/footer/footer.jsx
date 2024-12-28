import React from 'react'
import "./footer.css"
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { MdCamera } from "react-icons/md";
import { lines, upArrow } from '../../assets';
import { BsStars } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer">
        <div className="cursive-head">
            From ranchi
        </div>
        <div className="head">
            <span className="diff">Ranjan</span>/Studio
        </div>
        <div className="text">we capture the best moments of your life and make them last forever! <img src={upArrow} className="abs-arrow" alt="" /></div>
         <button>
             <RxDoubleArrowDown className="arrow"/> Contact us <RxDoubleArrowDown className="arrow"/>
         </button>
         <div className="smallText">
            we are waiting for you
         </div>

         <div className="socials">
             <div className="icon">
                 <FaInstagram className="i"/>
                 <p className="linkName">Instagram</p>
             </div>
             <div className="icon">
                 <ImWhatsapp className="i"/>
                 <p className="linkName">Whatsapp</p>
             </div>
             <div className="icon">
                 <FaFacebook className="i"/>
                 <p className="linkName">Facebook</p>
             </div>
           
         </div>
         <footer>
            <div className="box-1">
               <MdCamera className="camera"/>
               <p>Ranjan Studio</p>
            </div>
            <div className="box-2">
                @2024 all rights reserved
            </div>
         </footer>

         <img src={lines} alt="" className='abs-line-1' />
         <BsStars className="abs-star" />
    </section>
  )
}

export default Footer