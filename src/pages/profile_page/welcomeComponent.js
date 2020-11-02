import React from 'react';
import styles from "./welcome.css";

function Welcome(props) {
    return(
        <div className={styles.welcome_div}>
            <h1><b>Welcome {props.name}</b></h1>

        </div>
    );
};

export default Welcome;