import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './MainCarousel.css'

function MainCarousel() {
    return (
      <Carousel showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      autoPlay
      interval={5000}
      stopOnHover={false}
      >
      <div>
          <img src="https://i.ibb.co/vhPxGDf/DU-Book-X.png" />
          <p>Legend 1</p>
      </div>
      <div>
          <img src="https://i.ibb.co/vhPxGDf/DU-Book-X.png" />
          <p >Legend 2</p>
      </div>
      <div>
          <img src="https://i.ibb.co/vhPxGDf/DU-Book-X.png" />
          <p>Legend 3</p>
      </div>
  </Carousel>
    )
}

export default MainCarousel

        