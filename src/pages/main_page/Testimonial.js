import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Testimonial.module.css'

import testi1 from "../../assets/testimonial/1.png";
import testi2 from "../../assets/testimonial/2.png";
import testi3 from "../../assets/testimonial/3.png";
import testi4 from "../../assets/testimonial/4.png";


function MainCarousel() {
    return (
      <React.Fragment>
      <h1> Testimonials </h1>
        <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        >
             <div
          className={styles.SlideContainer}
     
            >
                <img src={testi1} alt={'bg'}/>

        </div>

        <div
          className={styles.SlideContainer}
     
            >
                <img src={testi2} alt={'bg'}/>

        </div>
        
        <div
          className={styles.SlideContainer}
     
            >
                <img src={testi3} alt={'bg'}/>

        </div>
        <div
          className={styles.SlideContainer}
     
            >
                <img src={testi4} alt={'bg'}/>

        </div>
    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
