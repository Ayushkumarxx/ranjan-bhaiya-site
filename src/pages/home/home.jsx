import React, { useState, useEffect, useRef } from "react";
import {
  About,
  Footer,
  Navbar,
  OurWork,
  Peoples,
  Service,
  Showcase,
  Testimonials,
} from "../../utils/export";
import "./home.css";
import { hero1, hero2, hero3 } from "../../assets";
import { BsStars, BsHeart, BsLightning } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeSection = ({ items }) => {
  return (
    <section className={`move ${items.className}`} id={items.id}>
      {Array.from({ length: items.numChildren }, (_, childIndex) => (
        <div className="marquee" key={childIndex}>
          <h2>{items.text}</h2>
          <div className="icon">
            <items.icon className="star" />
          </div>
        </div>
      ))}
    </section>
  );
};
const Home = () => {
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

  const marqueeData = [
    {
      text: "THRIVE BEYOND LIMITS",
      icon: BsStars,
      numChildren: 10,
      className: "stars-marquee",
      id: "stars",
    },
    {
      text: "LOVE IS IN THE AIR",
      icon: BsHeart,
      numChildren: 10,
      className: "hearts-marquee",
      id: "hearts",
    },
  ];
  let moveRef = useRef(null);
  let moveRef2 = useRef(null);
  useGSAP(
    () => {
      gsap.to(".marquee", {
        transform: "translateX(-200%)",
        ease: "none",
        repeat: -1,
        duration: 3,
      });
    },
    { scope: moveRef }
  );
  useGSAP(
    () => {
      gsap.to(".marquee", {
        transform: "translateX(0%)",
        ease: "none",
        repeat: -1,
        duration: 3,
      });
    },
    { scope: moveRef2 }
  );
  return (
    <>

    <section className="intro">
      
    </section>
      <Navbar />
      <section className="hero">
        <div className="heroText">
          <div className="text">
            {isWideScreen > 700 ? (
              <h1>
                <span>SAVE</span>
                <span>THE</span>
                <span>DATES</span>
              </h1>
            ) : (
              <h1>
                <span>SAVE THE</span>

                <span>DATES</span>
              </h1>
            )}
          </div>

          <div className="button">
            <button>Book now</button>
          </div>
        </div>
        <div className="heroImage">
          <div className="child">
            <div className="image">
              <img src={hero1} alt="" />
            </div>
            <div className="arcNtext">
              <div className="arc"></div>
              <div className="text">
                <p>Ranjan</p>
                <h2>We Provide</h2>
              </div>
            </div>
          </div>

          <div className="child">
            <div className="image">
              <img src={hero2} alt="" />
            </div>
            <div className="arcNtext">
              <div className="arc"></div>
              <div className="text">
                <p>studio</p>
                <h2>The Best </h2>
              </div>
            </div>
          </div>

          <div className="child">
            <div className="image">
              <img src={hero3} alt="" />
            </div>
            <div className="arcNtext">
              <div className="arc"></div>
              <div className="text">
                <p>ranchi</p>
                {isWideScreen ? (
                  <h2>Service in Ranchi</h2>
                ) : (
                  <h2>Services !</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Showcase />
      <section className="fewDetails">
        <div className="child numbersOf">
          <div className="box-1">
            <h2>150</h2>
          </div>
          <div className="box-2">
            <div className="text">weddings</div>
            <div className="text">a year</div>
          </div>
        </div>
        <div className="child rank">
          <div className="box-1">
            <h2>2</h2>
          </div>
          <div className="box-2">
            <div className="text">top studio</div>
            <div className="text">in ranchi city</div>
          </div>
        </div>
        <div className="child year">
          <div className="box-1">
            <h2>10</h2>
          </div>
          <div className="box-2">
            <div className="text">Years</div>
            <div className="text">in the business</div>
          </div>
        </div>
      </section>

      <About />
      <Peoples />
      <Service />

      <OurWork />
      <Testimonials />

      <section className="two-marquee">
        <section className="marquee-one" ref={moveRef}>
          <MarqueeSection items={marqueeData[0]} />
        </section>

        <section className="marquee-two" ref={moveRef2}>
          <MarqueeSection items={marqueeData[1]} />
        </section>
      </section>

      <Footer />
    </>
  );
};

export default Home;
