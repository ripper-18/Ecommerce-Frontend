import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './MainCarousel.css'

function MainCarousel() {
    return (
      <React.Fragment>
        <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay
        interval={7000}
        stopOnHover={false}
        >
            <div
          className="SlideContainer"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)" }}
            >
          <p className="SlideText" style={{ color: "white" }}>
            DU <br />
            BookX
            <br />

          </p>
          {/* <Link
            to="#"
          >
            <div className="RedButton">PERSONALISE MENU</div></Link> */}
        </div>

        <div
          className="SlideContainer"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)" }}
            >
          <p className="SlideText" style={{ color: "white)" }}>
          DU <br />
            BookX
            <br />
          </p>
          {/* <Link
            to="#"
          >
            <div className="RedButton">PERSONALISE MENU</div></Link> */}
        </div>

        <div
          className="SlideContainer"
          style={{ backgroundImage: "url(https://images.pexels.com/photos/4905078/pexels-photo-4905078.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)" }}
            >
          <p className="SlideText" style={{ color: "white" }}>
          DU <br />
            BookX
            <br />
          </p>
          {/* <Link
            to="#"
          >
            <div className="RedButton">PERSONALISE MENU</div></Link> */}
        </div>
    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
