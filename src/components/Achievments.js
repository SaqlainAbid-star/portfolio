/** @format */

import React from "react";
import { Border, Linux, o1,o2,o3,o4,o5,o6,o7,o8 } from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                             Achievements
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
const Achievments = () => {
  return (
    <>
      <section className='Full-Page h-75 mt-5'  name='achievements' id='achievements'>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Heading
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='Page-title'>
                <h1>
                  Achievements
                  <br />
                  <img src={Border} alt='Border' />
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               service cards
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}
        <div className='page-container container' >
          <div className='row'>
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o5} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o1} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o8} alt='Linux' width='100%' />
              </div>
            </div>
          </div>
        </div>

        <div className='page-container container'>
          <div className='row'>
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o7} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={Linux} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o2} alt='Linux' width='100%' />
              </div>
            </div>
          </div>
        </div>

        <div className='page-container container'>
          <div className='row'>
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o3} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o4} alt='Linux' width='100%' />
              </div>
            </div>{" "}
            <div className='col-md-4 '>
              <div
                className='card Achievements-service  aos-init'
                data-aos='zoom-in-up'
                data-aos-easing='linear'
                data-aos-duration='800'>
                <img src={o6} alt='Linux' width='100%' />
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
};
export default Achievments;
