import React,{useEffect} from 'react';
import styles from "./welcome.css";

function Welcome(props) {
    useEffect(() => {
        
       console.log(props.name)
    }, [])
    return(
        <div className={styles.welcome_div}>
            <h1><b>Welcome {props.name}</b></h1>

        </div>
    );
};

export default Welcome;