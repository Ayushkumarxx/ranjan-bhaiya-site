import React, { useRef, useEffect, useState } from "react";
import "./peoples.css";
import { show2, show4, show5 } from "../../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Peoples = () => {
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
  let peoplesRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ticker",
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: peoplesRef.current,
            start: "20% bottom",
            end: "80% 80%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".text",
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: peoplesRef.current,
            start: "0% bottom",
            end: "80% 80%",
            scrub: true,

            // markers: true,
          },
        }
      );
    },
    { scope: peoplesRef }
  );
  return (
    <section className="peoples" ref={peoplesRef}>
      <div className="ticker">Our Clients</div>
      <div className="main">
        {isWideScreen ? (
          <>
            <div className="text">
              We make it easy for you to
              <span className="image">
                <img src={show4} alt="" />
              </span>
              capture
            </div>
            <div className="text">
              the best
              <span className="image">
                <img src={show5} alt="" />
              </span>
              moments of your life and
            </div>
            <div className="text">
              make them
              <span className="image">
                <img src={show2} alt="" />
              </span>
              last forever!
            </div>
          </>
        ) : (
          <div className="text">
            We make it easy  <span className="image">
              <img src={show4} alt="" />
            </span>for you to capture the best
            <span className="image">
              <img src={show5} alt="" />
            </span>
            moments of your life and make them
            <span className="image">
              <img src={show2} alt="" />
            </span>
            last forever!
          </div>
        )}
      </div>
    </section>
  );
};

export default Peoples;
