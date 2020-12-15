import React, { Component } from 'react'
import styles from './CourseCard.module.css';

class CourseCard extends Component {

    render() {
        return (
            <div className={styles.CourseCard} style={{backgroundImage:"url('./mtech.jpg')"}}>
                <div className={styles.CourseName}>
                    <h1>{this.props.name}</h1>      
                           
                </div>

                <div className={styles.CourseOverlay}>

                </div>                

            </div>


        );
    }
}

export default CourseCard;

