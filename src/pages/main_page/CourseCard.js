import React,{Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import bt from './btech.jpg'
import mt from './mtech.jpg'
import ba from './ba.jpg'
import bs from './bsc.jpg'
import bc from './bcom.jpg'


import styles from './CourseCard.module.css';

class CourseCard extends Component{
    
    render(){
        var str = './' + this.props.name + '.jpg';
        var imagee = bt;
      

        var link = './category/'

        if(this.props.name === "Mtech" || this.props.name === "Btech")link += 'Engg'
        else link+=this.props.name

         
        const mystyle = {
            backgroundImage: `url(${imagee})`
        };
        
        return(
            <div className={styles.outer}>
            <div className={styles.card_container}  onClick={() => this.props.history.push(link)}>
                <img src={imagee} alt={'course'} className={styles.cardimg}/>
                <div className={styles.overlay}>
                </div>
            </div>
            <div className={styles.label}  onClick={() => this.props.history.push(link)}>
                {(this.props.name).toUpperCase()}
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    cart: state.cart,
});

export default connect(mapStateToProps)(withRouter(CourseCard))