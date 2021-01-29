import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Testimonial.module.css'

function MainCarousel() {
    return (
      <React.Fragment>
        <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        autoPlay
        interval={10000}
        stopOnHover={true}
        >
             <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/P155QR9/Untitled-design-22.png`} alt={'bg'}/>

          <div className={styles.divider}>
          
          <p className={styles.SlideText}>
            " Better than amazon honestly ! "

          </p>
          <p className={styles.SlideText2}>
            " Better than amazon honestly ! "

          </p>

          </div>
        </div>

        <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/P155QR9/Untitled-design-22.png`} alt={'bg'}/>
                <p className={styles.SlideText}>
            " DU book X ftw! "

          </p>
        </div>
        <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/P155QR9/Untitled-design-22.png`} alt={'bg'}/>
                <p className={styles.SlideText}>
            " pehle mai books nahi kharid paata tha, fir mujhe mere dost ne DU book X ke baare me bataya. Ab mere paas course ki saari kitaabe aur do do girfriend bhi hai!  "

          </p>
        </div>
    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
