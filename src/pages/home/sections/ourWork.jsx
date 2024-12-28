import React, { useState , useEffect} from "react";
import "./ourWork.css";
import { BsStars } from "react-icons/bs";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { event, hero1, hero2, hero3, show1, show2, show3, show4, show5 } from "../../../assets";

const OurWork = () => {
  
  //? gsap
  let gridRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".item-icon-text, .item",
      {
        opacity: 0.5,
        scale: 0,
      },
      {
        stagger: 0.1,
        opacity: 1,
        duration: 4,
        scale: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "-30% bottom",
          end: "80% 80%",
          scrub: true,
        
          // markers: true,
        },
      }
    );
  }, {scope : gridRef, });

  //? generate random indexes for grid
  const [gridItem, setGridItem] = useState([]);
  const [iconTextIndex, setIconTextIndex] = useState([]);

  useEffect(() => {
    const updateArrays = () => {
      if (window.innerWidth > 700) {
        // Screen width is larger than 700px
        setGridItem(
          [2, 6, 4, 5, 6, 2, 5, 4, 6, 2, 5, 3, 2, 6, 4, 3]
        );
        setIconTextIndex([5, 3, 5, 3, 4, 2, 5, 6]);
      } else {
        // Screen width is smaller than or equal to 700px
        setGridItem([1, 3, 2, 3, 3, 1, 3, 2, 3, 1, 3, 3, 1, 2, 2, 3]);
        setIconTextIndex([2, 1, 2, 1, 2, 1, 3, 1]);
      }
    };

    // Call updateArrays initially
    updateArrays();

    // Add an event listener for window resize
    window.addEventListener("resize", updateArrays);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", updateArrays);
    };
  }, []);
  let iconText = [
    <p className="text"> We Listen</p>,
    <BsStars className="icon" />,
    <p className="text"> Check out our work </p>,
    <BsStars className="icon" />,
    <p className="text"> Is This Perfection ?</p>,
    <BsStars className="icon" />,
    <p className="text">We Think So </p>,
    <BsStars className="icon" />,
    
  ]
 
  let imageLink = [
    hero3,
    hero1,
    hero2,
    show3,
    show2,
    show4,
    show5,
    event
  ]



  // const generateRandomArray = (length) => {
  //   const result = [];
  //   const possibleValues = [ 2, 3, 4, 5, 6, ]; 
  
  //   for (let i = 0; i < length; i++) {
  //     let newValue;
      
  //     do {
  //       newValue = possibleValues[Math.floor(Math.random() * possibleValues.length)];
  //     } while (result[i - 1] === newValue); 

  //     result.push(newValue);
  //   }

  //   return result;
  // };

  
  // useLayoutEffect(() => {
  //   setGridItem(generateRandomArray(16));
  // }, []);
  return (
    <section className="ourWork">
      <div className="head">
        <div className="work">Work</div>
        <div className="star">
          <BsStars className="i" />
        </div>
        <div className="text">Our Work</div>
        <div className="star">
          <BsStars className="i" />
        </div>
        <div className="our">OUR</div>
      </div>

      <div className="grid-box" ref={gridRef}>
      {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="item-icon-text"
            style={{
              "--c": iconTextIndex[index], 
              "--r": index + 1, 
            }}
          >
           {iconText[index]}
          </div>


        ))}
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className="item"
            style={{
              "--c": gridItem[index], 
              "--r": Math.floor(index / 2) + 1, 
            }}
          >
            <img src={imageLink[index%7 + 1]} alt="" />
          </div>


        ))}
   

      </div>
    </section>
  );
};

export default OurWork;
