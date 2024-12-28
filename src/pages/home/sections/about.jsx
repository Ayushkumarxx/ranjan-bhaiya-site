import React from "react";
import "./about.css";
import { hero3, owner, show4 } from "../../../assets";
import { BsStars } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
const About = () => {
  return (
    <section className="about">
      <div className="child textNbutton">
        <p className="head">
          <span>FEELS ARE</span>
          <span>CAPTURED BY</span>
          <span>OUR TEAM</span>
        </p>
        <p className="text">
          we capture the best moments of your life and make them last forever!
        </p>
        <div className="button">
          <button>Book now</button>
        </div>
      </div>
      <div className="child image-box">
        <div className="border">
          <div className="padding">
            <div className="image">
              <img src={show4} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="child aboutOwner">
        <div className="text-box">
          <BsStars className="star" />
          <p>
            Hey its me Ranjan, the owner of Ranjan Studio and photographer, you can connect me in instagram
          </p>
        </div>
        <div className="owner">
            <div className="image">
                <img src={owner} alt="" />
            </div>
            <div className="instaLink">
                <FiInstagram className="insta"/>
            </div>
            <div className="whatsLink">
                <FaWhatsapp className="whats"/>
            </div>
            <p className="text">
                Ranjan Studio
            </p>
        </div>
      </div>
    </section>
  );
};

export default About;
