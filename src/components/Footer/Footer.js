import React from "react";
import footerLogo from "../../assets/logo.png";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className = {styles.FooterMain}>
    <div className={styles.Footer}>
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />


    </div>

    (c) 2020 @ DelhiBookX 
    </div>
  );
};

const ColumnOne = () => {
  return (
    <div className={styles.Column}>
      <div className={styles.Title} style={{ marginBottom: "0rem" }}>
        CONTACT US
      </div>
      <ul>
        <li>Ramon Contact Number</li>
        <a href="mailto:delhibookx@gmail.com"><li>delhiboox@gmail.com</li></a>
      </ul>
    </div>
  );
};

const ColumnTwo = () => (
  <div className={styles.Column}>
    <div className={styles.Title}>ABOUT</div>
    <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
      
      <Link to="/about">
        <li> About</li>
      </Link>
      <Link to="/menu">
      <li> Menu</li>
      </Link>
      
    </ul>
  </div>
);

const ColumnThree = () => (
  <div className={styles.Column}>
    <div className={styles.Title}>SUPPORT</div>
    <ul>

      <Link to="/faq">
        <li> FAQs</li>
      </Link>
      <Link to="/disclaimer">
        <li> Disclaimer</li>
      </Link>
      <Link to="/privacy">
        <li> Privacy</li>
      </Link>
      <Link to="/terms">
        <li> Terms</li>
      </Link>
      <Link to="/returns">
        <li> Returns</li>
      </Link>
    </ul>
  </div>
);

export default Footer;
