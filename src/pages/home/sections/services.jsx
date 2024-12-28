import React, { useEffect, useState } from "react";
import "./services.css";
import { event, hero3,  show4, show6 } from "../../../assets";
import { MdArrowForwardIos } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
const Service = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 700);
      useEffect(() => {
        const handleResize = () => {
          setIsWideScreen(window.innerWidth > 700);
        };
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
  return (
    <section className="service">
        
      <div className="head-1">
        <div className="big">Our studio</div>
        <div className="small">
          Based on <br /> ranchi city
        </div>
      
      </div>
      <div className="head-2">
        <div className="small">
          {isWideScreen ? (<>
            we are specialised in <br />
            photography and videography <br /> for weddings and events</>): (<>
              we are specialised in <br />
              photography</>)}
          
        </div>
        <div className="big">/ Services</div>
        <BsStars className="abs-star" />
      </div>

      <div className="our-service">
        <div className="image-box">
          <div className="image">
            <img src={hero3} alt="" />
            <div className="overlay ">
                <div className="overlay-content">
                    <h3>Weddings</h3>
                </div>
            </div>
          </div>
          <div className="image">
            <img src={show6} alt="" />
            <div className="overlay ">
                <div className="overlay-content">
                    <h3>Aniversary</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="text">
          <div className="list">
            <div className="li">
              <FiArrowRight  className="arrow" />
              <p>Weddings</p>
            </div>
            <div className="li">
              <FiArrowRight  className="arrow" />
              <p>Events</p>
            </div>
            <div className="li">
              <FiArrowRight  className="arrow" />
              <p>Pre weddings</p>
            </div>
            <div className="li">
              <FiArrowRight  className="arrow" />
              <p>Commercias</p>
            </div>
            <div className="li">
              <FiArrowRight  className="arrow" />
              <p>Reels</p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-service reverse-service">
        <div className="image-box">
          <div className="image">
            <img src={show4} alt="" />
            <div className="overlay ">
                <div className="overlay-content">
                    <h3>Pre Weddings</h3>
                </div>
            </div>
          </div>
          <div className="image">
            <img src={event} alt="" />
            <div className="overlay ">
                <div className="overlay-content">
                    <h3>Events Shoot</h3>
                </div>
            </div>
          </div>
        </div>
        <div className="rev-text">
            
         <p>whether it is a weddings party, a business meeting, or a family reunion, our team of photographers and videographers will capture the best moments.</p>
         <button>
            Explore All <MdArrowForwardIos className="arrow" />
         </button>
          
        </div>
      </div>
    </section>
  );
};

export default Service;
