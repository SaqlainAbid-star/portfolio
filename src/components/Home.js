/** @format */

import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { Logo, HandGif, WebDesigning } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Home
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

const Home = () => {


// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//    Pic Movement Up/Down 
  const img = useRef(null);
  useEffect(() => {
    img.current.animate(
      [
        { transform: "translate(0, 0)" },
        { transform: "translate(0, 20px)" },
        { transform: "translate(0, 0)" },
      ],
      {
        duration: 4000,
        iterations: Infinity,
        yoyo: Infinity,
        animationTimingFunction: "linear",
        playbackRate: -30,
      },
    );
  });
  return (
    <>
      <div
        className='full-height'
        name='home'
        id='home'
        data-aos='fade-right'
        data-aos-offset='300'
        data-aos-easing='ease-in-sine'
        data-aos-duration='1200'>
        <div className='section'>
          <div className='container  '>
            <div className='row'>
              <div className='col-md-6'>
                <p>
                  HI! WELCOME HERE
                  <img src={HandGif} alt='gif' style={{ width: "25px" }} />
                </p>
                <h2>I am Saqlain - Web & Mobile Application Developer</h2>
                <a
                  className='nav-link'
                  href='https://drive.google.com/file/d/1RAhX4zRO2IDCdoH6aLvXnw2D310xsfuG/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className="btn"> Download Resume</button>
                </a>
                <a
                  href='https://www.fiverr.com/saqlain_abid_1?up_rollout=true'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className='ml-2 btn'>Hire me</button>
                </a>
              </div>
              <div className='col-md-6'>
              <img
                  ref={img}
                  src={WebDesigning}
                  className='img1'
                  alt='ErbDesinging'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
                  {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             logo
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
      <Link
        activeClass='active'
        to='home'
        delay={100}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='logo'>
        <img src={Logo} alt='Logo' />
      </Link>
    </>
  );
};
export default Home;
