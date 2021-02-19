import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from './Testimonial.module.css'

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
                <img src={`https://i.ibb.co/Tg85GM5/testimonial-bg.jpg`} alt={'bg'}/>

          <div className={styles.divider}>
          
          <p className={styles.SlideText}>
            " thanks to the amazing and smooth services of dubookx, I could get rid of my old books without any difficulties while making some quick money! 

            The pick up service of the books was convenient and taken directly from my door steps making it easier than ever!

            Dubookx is now my go-to place for selling as well as buying my college books! 
            
<br></br> <br/>
      - <span className = {styles.TestiName}>Niharika, (seller) <br/>
            SRCC </span>
     
      </p> 


          </div>
        </div>

        <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/Tg85GM5/testimonial-bg.jpg`} alt={'bg'}/>

          <div className={styles.divider}>
          
          <p className={styles.SlideText}>
          "Even though DUbookX is new, they have made ordering and delivering books an easy experience. I received my materials very quickly and in perfect condition, 
          which any student will agree is important. They are extremely efficient, resourceful and courteous so I definitely recommend their services!"
<br></br> <br/><br/>
      - <span className = {styles.TestiName}>Riddhima Dyal Singh (buyer)<br/>Dyal Singh College </span>
          </p>


          </div>
        </div>
        <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/Tg85GM5/testimonial-bg.jpg`} alt={'bg'}/>

          <div className={styles.divider}>
          
          <p className={styles.SlideText}>
            " DUbookX delivered my readings very quickly and conveniently within 2 days. The order went through smoothly without any hindrances and 
            I had a great ordering experience at an affordable price! I'll now buy and sell my books from DUbookX for the upcoming semesters! "
<br></br> <br/>
      - <span className = {styles.TestiName}>Priyam (buyer)<br/>SRCC </span>
          </p>


          </div>
        </div>
        <div
          className={styles.SlideContainer}
     
            >
                <img src={`https://i.ibb.co/Tg85GM5/testimonial-bg.jpg`} alt={'bg'}/>

          <div className={styles.divider}>
          
          <p className={styles.SlideText}>
            " I really liked DUbookX's service, it was well timed and the books were good quality. Books of 2019 edition were there, so it was nice, 
            I was worried if I would get a very rough and old edition book. Great help for students in this time of pandemic.
If there would be any rating system, I would surely give DUbookX a five-star.
Thanks! "
<br></br> <br/>
      - <span className = {styles.TestiName}>Aryaman Malviya(buyer) <br/>SRCC </span>
          </p>


          </div>
        </div>
    </Carousel>
    </React.Fragment>
    )
}

export default MainCarousel
