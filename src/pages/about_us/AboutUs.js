import React,{useEffect} from "react";
import styles from "./AboutUs.module.css";
import { Link } from "react-router-dom";
import about1 from "../../assets/about_page/about-landing-1.jpg";
import about2 from "../../assets/about_page/about-landing-2.jpg";
import stars from "../../assets/about_page/star.svg";
import card1 from "../../assets/about_page/about-landing-card-1.jpg";
import card2 from "../../assets/about_page/about-landing-card-2.jpg";
import card3 from "../../assets/about_page/about-landing-card-3.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className={styles["hero-container"]}>
          <hr />
          <h3>ABOUT </h3>
          <h1>
            DU Book X
          </h1>
          <p>Affordable books at your doorstep!</p>
          
        </div>
      </div>
      <div className={styles["mobile-hero"]}>
      <p>Affordable books at your doorstep!</p>
        

      </div>

      <div className="container">
        <div className={styles.about2}>
          <div>
          <h1>THIS IS DUbookX</h1>
            <p>
            <br></br>
            <br></br>
            DUbookX is a student run body whose goal is to create a user-friendly platform to buy and sell books at affordable prices. We at DUbookX, give students a chance to get rid of their old books to earn some quick money and at the same time let others save some money by not purchasing books at an expensive rate.
            </p>
            <p>
            
            DUbookX was formed by 4 students in their second year of college with a simple idea. As our exams were approaching, we were finding a convenient way of purchasing second hand books at affordable prices but couldn’t find any reliable platform for it. We decided to take things in our own hands and launch a platform for people to purchase both first and second hand books conveniently. We wanted to be the solution to many of the students' problems.
            <br></br>
            <br></br>
            The world has been left rattled ever since the outbreak of Covid 19. Our local entrepreneurs have been left scrambling for customers and we at DUbookX are doing our best to help them. We have opened our platform to the various book shops across India who have been struggling to sell their stock. They have assisted us in providing our customers with a wide plethora of books to choose from. And the best part about this is that we can deliver the books directly to your doorstep at the cheapest of prices.
            <br></br>
            <br></br>

            We believe that we can be the solution to your problems.
            </p>
          </div>
          <img src={about2} alt="" />
        </div>
      </div>



    </div>
  );
};

export default About;
