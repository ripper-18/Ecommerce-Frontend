import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './MainCarousel.module.css'

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
              <img src={`https://i.ibb.co/XtFGZRw/DDD19-B52-2856-42-B2-8-ECB-7-A26735-BA8-BC.png`} alt={'bg'}/>
          </div>

        <div
          className={styles.SlideContainer}
          
            >
                <img src={`https://i.ibb.co/kM6DjBp/Untitled-design-10.png`} alt={'bg'}/>
          <p className={styles.SlideText} >
          <span className={styles.SmallText}>Get your Books</span>
          <br/>
          <span className= {styles.MedText}> at Unbeatable Prices</span>
          <br/>
           <span className={styles.SmallText}>delivered to your doorstep
           </span>
            <br />
          </p>

        </div>

        <div
          className={styles.SlideContainer}
      
            >
                <img src={`https://i.ibb.co/zNb01kp/Untitled-design-11.png`} alt={'bg'}/>
          <p className={styles.SlideText}>
          Become <br />
           A <br/>
           Seller
            <br />
          </p>
         
        </div>
    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
