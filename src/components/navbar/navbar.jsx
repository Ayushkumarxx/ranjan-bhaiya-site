import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const tl = useRef(null); // Ref for the GSAP timeline
  const navRef = useRef(null); // Ref for the navigation container
  const [isPlaying, setIsPlaying] = useState(false); // State to track toggle

  // useGSAP hook setup
  useGSAP(
    (context, contextSafe) => {
      const showLinks = contextSafe(() => {
        tl.current = gsap.timeline({ paused: true }); // Initialize paused timeline
        tl.current
          .to(".mob-nav-links", {
            top: 0,
            duration: 0.5,
            ease: "power1.inOut",
          })
          .from(".mob-nav-links .mob-link", {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power1.inOut",
            stagger: 0.1, // Optional stagger for smoother effect
          });
      });

      showLinks(); // Initialize timeline
    },
    { scope: navRef }
  );

  // Toggle animation handler
  const toggleAnimation = () => {
    if (isPlaying) {
      tl.current.reverse(); // Reverse animation
    } else {
      tl.current.play(); // Play animation
    }
    setIsPlaying(!isPlaying); // Toggle state
  };
  return (
    <nav id="nav" ref={navRef}>
      <div className="headNlinks">
        <div className="head ani-same-nav">RS</div>
        <div className="links">
          <ol>
            <li className="ani-same-nav">
              <a href="#">OUR STORY</a>
            </li>
            <li className="ani-same-nav">
              <a href="#">PHOTOS ALBUM</a>
            </li>
            <li className="ani-same-nav">
              <a href="#">CONTACT</a>
            </li>
            <li className="ani-same-nav">
              <a href="#">SERVICES</a>
            </li>
          </ol>
        </div>
      </div>
      <div className="direction">
        DIRECTION <IoIosArrowRoundForward className="arrow" />
      </div>
      <div className="ham-icon" onClick={toggleAnimation}>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      <div className="mob-nav-links">
        <div className="main">
          <div className="back" onClick={toggleAnimation}></div>
          <div className="mob-links" onClick={toggleAnimation}>
            <a href="#" className="mob-link">
              OUR STORY
            </a>
          </div>
          <div className="mob-links" onClick={toggleAnimation}>
            <a href="#" className="mob-link">
              PHOTOS ALBUM
            </a>
          </div>
          <div className="mob-links" onClick={toggleAnimation}>
            <a href="#" className="mob-link">
              CONTACT
            </a>
          </div>
          <div className="mob-links" onClick={toggleAnimation}>
            <a href="#" className="mob-link">
              SERVICES
            </a>
          </div>
          <div className="mob-links" onClick={toggleAnimation}>
            <a href="#" className="mob-link">
              DIRECTION
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
