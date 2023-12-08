/** @format */

import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
// import { Link } from "react-router-dom";
import {
  Border,
  Quiz,
  Uni,
  Calc,
  Olx,
  Saylani,
  Stop,
  m1,
  m2,
  m3,
  m4,
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,

} from "./image";
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                               Portfolio
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================

export default function Portfolio() {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 4,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 1,
  //   },
  // };
  return (
    <div>
      <>
        <section id='Portfolio' className='Full-Page mt-5 h-75' name='portfolio'>
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
                    PORTFOLIO
                    <br />
                    <img src={Border} alt='Border' />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* 
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
//                           Project cards
// ======================°°°°°°°°°°°°°°°°°°°°°°°=========================
*/}

          <div className='container text-center '>
            {/* <Carousel responsive={responsive}>
              <div className='card portfolio-card'>
                <img src={Innovation} className='card-img-top' alt='...' />
                <h5 className='pt-3'>Innovation College</h5>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Olx Clone</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={Posale} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Posale.pk</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={landingPage} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Landing Page</h5>
                </div>
              </div>
              <div>
                <div className='card portfolio-card'>
                  <img src={aamir} className='card-img-top' alt='...' />
                  <h5 className='pt-3'>Pharmachy Mobile App</h5>
                </div>
              </div> 
            </Carousel> */}

            <h1 className="text-left my-5 ">Web Applications: </h1>

            {/* Row 1 */}


            <div className='row'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w6} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://fooddev-restaurant.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/FoodDev_Frontend'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>FoodDev Restaurant App</h5>
                  <p class="card-text">
                    A MERN web app where users can explore food catalog, add items to their cart, and place orders effortlessly. Admins manage the platform through a dedicated panel, adding new items and confirming orders. 
                    </p>
                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w5} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://memories-12.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Memories_frontend'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Memories App</h5>
                  <p class="card-text">
                    A MERN App which allows users to upload photos, add titles, messages, and tags to their memories. It supports CRUD operations, enabling users to create, read, update, and delete memories.
                    </p>

                </div>
              </div>


              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  style={{ height: 360 }}
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Olx} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://fir-database-f7f38.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/React-Olx'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Olx Clone</h5>
                  <p class="card-text">A MERN web app for Buying and selling items, it offers seamless user registration, effortlessly browse, list, and purchase items. Crafted with precision using React, Node.js, and MongoDB.
                  </p>

                </div>
              </div>

            </div>


            {/* Row 2 */}

            <div className='row mt-5'>



              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w3} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://spacex-rockets-1.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>
                      <a
                        href='https://github.com/SaqlainAbid-star/React_SpaceX_Rockets'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Rockets App</h5>
                  <p class="card-text">
                  Discover SpaceX rockets with our React.js app. Click on any rocket for in-depth details and open its Wikipedia page instantly. Filter your search by rocket heights.
                  </p>

                </div>
              </div>


              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w4} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://reactjs-video-call.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/React-video-chat'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Video Calling App</h5>
                  <p class="card-text">
                    A streamlined video calling app built with simplicity. Powered by simple-peer and socket.io, users experience seamless one-to-one video calls. The app notifies users of incoming calls, allowing them to answer with a single click. 
                    </p>

                </div>
              </div>


              <div className='col-sm-4 '>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w1} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://ticket-support-system.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/ticket-support-system-frontend'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Ticket Support System</h5>
                  <p class="card-text">A web app that helps service providers provide
                    after-sales support for their customers. Customers can open a ticket when they need
                    assistance. Support agents get in
                    contact with the ticket owner to help resolve their issues.
                  </p>

                </div>
              </div>

            </div>

            {/* Row 3 */}

            <div className='row mt-5'>

              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  style={{ height: 360 }}
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={w2} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://task-management-12.netlify.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/task_management_frontend'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Task Management System</h5>
                  <p class="card-text">
                    A MERN collaborative task management. Add tasks effortlessly, view and control group-specific tasks, and easily delete items. Integrated with a mock API for seamless data sharing among users in the same group.
                  </p>

                </div>
              </div>

              <div className='col-sm-4 '>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  style={{ height: 360 }}
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Uni} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://universal-solar-energy-f839b.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Universal-Solar-Energy'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Universal Solar Energy</h5>
                  <p class="card-text">A website crafted with HTML, CSS, Bootstrap and JavaScript. The platform is designed with user-friendly navigation, offering visitors a comprehensive view of sustainable energy solutions.</p>

                </div>
              </div>

              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  style={{ height: 360 }}
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Saylani} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://saqlainabid-star.github.io/Home-Page-Of-Saylani/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Home-Page-Of-Saylani'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Saylani Homepage</h5>
                  <p class="card-text">A Homepage designed using Html, Css, Bootstrap and Javascript.</p>

                </div>
              </div>

            </div>

            {/* Row 4 */}

            <div className='row mt-5'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Calc} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://calculator-a69ab.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Calculator'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Calculator</h5>
                  <p class="card-text">A Calculator application using Html, Css and Javascript.</p>

                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Quiz} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://quiz-application-425fc.firebaseapp.com/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Quiz-Application'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Quiz Application</h5>
                  <p class="card-text">A Quiz application using Html, Css and Javascript.</p>

                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={Stop} className='card-img-top' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://stop-watch-1b086.web.app/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>
                      <a
                        href='https://github.com/SaqlainAbid-star/Stop-Watch'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3'>Stop Watch</h5>
                  <p class="card-text">A stop watch application using Html, Css and Javascript.</p>

                </div>
              </div>
            </div>

            {/* Row 5 */}



            {/* Mobile apps */}

            <h1 className="text-left my-5 ">Mobile Applications: </h1>


            <div className='row mt-4'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={m3} className='card-img-top h-75' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://drive.google.com/file/d/1JxFf5IeczkCvJq9TDaoma7SR5sI46J4t/view?usp=drivesdk'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/Find-my-mentor'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Find My Mentor</h5>
                  <p class="card-text">A react native mobile app where mentors can launch their courses and students can learn from them. Students can schedule appointments to make video meetings using agora sdk.</p>


                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card '
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={m2} className='card-img-top h-75' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://youtu.be/HQR918rUVjw?si=lwm_Hy0IrqNGevcc'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/RN-SavePlaces'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Save Places</h5>
                  <p class="card-text">A Google Maps API based react native app for managing your favourite places with appropriate details, images and precise coordinates for seamless future navigation.</p>

                </div>
              </div>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={m1} className='card-img-top h-75' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://youtu.be/r0r3GOH3U2M?si=wuD95B2lByqZdOWS'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>
                      <a
                        href='https://github.com/SaqlainAbid-star/RN-QR_Scanner2'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>
                  <h5 className='pt-3 '>Shop Safety Scanner</h5>
                  <p class="card-text">An app that enhances shop safety. Users scan tool QR codes to instantly check permission. Admins control tool access, managed via Mongodb database. Scan history available.</p>
                </div>
              </div>
            </div>


            <div className='row mt-5'>
              <div className='col-sm-4'>
                <div
                  className='card portfolio-card'
                  data-aos='flip-right'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'>
                  <img src={m4} className='card-img-top h-75' alt='...' />
                  <div className='detail'>
                    <div className='content'>
                      <a
                        href='https://youtube.com/shorts/JoQaegLt7OE?si=cyE4q9dUOhdcw_46'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaEye
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            borderRadius: 100,
                          }}
                        />
                      </a>

                      <a
                        href='https://github.com/SaqlainAbid-star/RN-Pension'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <FaGithub
                          style={{
                            color: "#212121",
                            fontSize: 35,
                            backgroundColor: "white",
                            marginLeft: 10,
                            borderRadius: 100,
                          }}
                        />
                      </a>
                    </div>
                  </div>

                  <h5 className='pt-3'>Pension Calculator</h5>
                  <p class="card-text">A mobile app for govt employees to effortlessly calculate their pensions by providing service details and salary, generating accurate pension estimates. It also features secure PDF generation. </p>
                </div>
              </div>

            </div>



            <div className='row mt-5 mb-5 See-More-Btn'>
              <div className='col-sm-12'>
                <a
                  href='https://github.com/SaqlainAbid-star'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className="btn">See more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
