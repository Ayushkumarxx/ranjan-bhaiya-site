import React from "react";
import "./showcase.css";
import { LuSparkles } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi2";
import { RxDoubleArrowDown } from "react-icons/rx";
import { BsStars } from "react-icons/bs";
import { hero1, hero2, show1, show2, show3, show5 } from "../../../assets";
const Showcase = () => {
  return (
    <section className="showcase-container">
      <div className="showcase">
        <div className="child">
            <div className="sparkle">
                <LuSparkles className="spark"/>
            </div>
          <div className="type-1-showcase">
            <p className="text"><LuSparkles className="spark"/> ranjan studio</p>
            <h2>prewedding shoot</h2>

            <div className="image-box-1">
                <div className="image"><img src={show2} alt="" /></div>
            </div>
            <p className="text">perfect capture</p>
            <div className="image-box-2">
                <div className="image"><img src={show1}  alt="" /></div>
            </div>
          </div>
        </div>


        <div className="child">
          <div className="type-2-showcase">
            <p className="text">from ranchi</p>
            <div className="image"><img src={show5} alt="" /></div>
            <h2 className="head-1">Weddings clicks</h2>
            <h2 className="head-2">Birthday clicks</h2>
            <h2 className="head-3">Events shoots <HiOutlineSparkles className="spark"/></h2>
          </div>
          <div className="arrow">
            <RxDoubleArrowDown className="arrow-down"/>
          </div>
        </div>
        <div className="child last">
          <div className="type-3-showcase">
            <div className="sparkNtext">
                <div className="sparkle-box">
                    <BsStars className="spark"/>
                </div>
                <div className="text">
                    Create memeory
                </div>
            </div>
            <div className="image"><img src={show3} alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
