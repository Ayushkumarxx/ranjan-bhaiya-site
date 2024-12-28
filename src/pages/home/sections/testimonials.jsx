import React, { useRef } from "react";
import "./testimonials.css";
import { MdOutlineStar } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { testimonialData } from "../../../utils/export";
import { GoArrowUpRight } from "react-icons/go";
import { BsStars } from "react-icons/bs";


const Testimonials = () => {
  let testRef = useRef(null);

  return (
    <section className="testimonials" ref={testRef}>
      <div className="head">
        <h1 className="heading">
          <span className="rotated">World Class</span>Customer Reviews
          <BsStars className="star" />
        </h1>
        <p className="text">
          Our customers are our first priority. Here are what they have to say
          about us
        </p>
      </div>
 

     

      <div className="review-box">
        <div className="reviews">
          <div className="review">
            <h2>The best driven production company</h2>
            <p>ayush kumar</p>
          </div>
          <div className="review gap"></div>

          <div className="review">
            <h2>The quality of work is outstanding</h2>
            <p>nigesh kumar</p>
          </div>
          <div className="review gap"></div>

          <div className="review">
            <h2>They are very punctual and professional</h2>
            <p>rohit kumar</p>
          </div>
        </div>
        <div className="reviews">
        <div className="review "></div>

          <div className="review">
            <h2>The best driven production company</h2>
            <p>ayush kumar</p>
          </div>
          <div className="review gap"></div>
          <div className="review">
            <h2>The quality of work is outstanding</h2>
            <p>nigesh kumar</p>
          </div>
          <div className="review "></div>

         
        </div>
      </div>
       <div className="details">
        <div className="rating">
            <div className="heading">
                4.6 <MdOutlineStar className="rating-star" />
            </div>
            <p className="text">
               stars out of 5
            </p>
        </div>
        <div className="response">
        <div className="heading">
                24 hours
            </div>
            <p className="text">
                avg. response time
            </p>
        </div>
        <div className="button">
            See 227+ review on Google <GoArrowUpRight className="arrow" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
