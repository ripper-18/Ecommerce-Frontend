import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import {Link,withRouter} from 'react-router-dom'

import { Carousel } from 'react-responsive-carousel';
import styles from './MainCarousel.module.css'
import Carousel1 from "../../assets/banners/1.png";
import Carousel2 from "../../assets/banners/2.png";
import Carousel3 from "../../assets/banners/3.png";
import Carousel4 from "../../assets/banners/4.png";
import Carousel5 from "../../assets/banners/5.png";


function MainCarousel() {
    return (
      <React.Fragment>
        <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay
        interval={5000}
        stopOnHover={false}
        >
            
          <div
            className={styles.SlideContainer}>
              <img src={Carousel1} alt={'bg'}/>
          </div>


          <div
            className={styles.SlideContainer}>
              <img src={Carousel2} alt={'bg'}/>
          </div>


          <a href = "seller_reg">
          <div
            className={styles.SlideContainer}>

              <img src={Carousel3} alt={'bg'}/>
          </div>
          </a>

          <div
            className={styles.SlideContainer}>
              <img src={Carousel4} alt={'bg'}/>
          </div>

          <div
            className={styles.SlideContainer}>
              <img src={Carousel5} alt={'bg'}/>
          </div>

    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
