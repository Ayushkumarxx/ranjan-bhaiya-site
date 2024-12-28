import React , {useState, useEffect }from "react";
import { About, Footer, Navbar, OurWork, Peoples, Service, Showcase, Testimonials } from "../../utils/export";
import "./home.css";
import { hero1, hero2, hero3 } from "../../assets";
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
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="heroText">
          <div className="text">
            {isWideScreen > 700 ?   <h1>
              <span>SAVE</span>
              <span >THE</span>
              <span>DATES</span>
            </h1>:
            <h1>
              <span>SAVE THE</span>
              
              <span>DATES</span>
            </h1>}
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
                {isWideScreen ? <h2>Service in Ranchi</h2>: <h2>Services</h2>}
              
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

      <About/>
      <Peoples/>
      <Service/>
  
      <OurWork/>
      <Testimonials/>
     
      <Footer/>
    </>
  );
};

export default Home;
