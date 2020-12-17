import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import styles from './MainCarousel.module.css'

function MainCarousel() {
    return (
      <React.Fragment>
        <OwlCarousel 
        items={1}
         loop={true}
         autoplay ={true}
         slideBy={2}
         autoplayTimeout={5000}
         autoplayHoverPause={true}
         navigation={true}
         autoHeightClass
         margin={2}
        >
            <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/jT82Cmk/DU-Book-X-1.png`} alt={'bg'}/>
          <p className={styles.SlideText}>
            DU <br />
            BookX
            <br />

          </p>
        </div>

        <div
          className={styles.SlideContainer}
          
            >
                <img src={`https://i.ibb.co/kM6DjBp/Untitled-design-10.png`} alt={'bg'}/>
          <p className={styles.SlideText} >
          DU <br />
            BookX
            <br />
          </p>

        </div>

        <div
          className={styles.SlideContainer}
      
            >
                <img src={`https://i.ibb.co/zNb01kp/Untitled-design-11.png`} alt={'bg'}/>
          <p className={styles.SlideText}>
          DU <br />
            BookX
            <br />
          </p>
         
        </div>
    </OwlCarousel>
    </React.Fragment>
    )
}

export default MainCarousel
