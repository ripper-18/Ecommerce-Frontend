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
        if(this.props.name === "Mtech")imagee = mt;
        if (this.props.name === "Bcom") imagee = bc;
        if (this.props.name === "Bsc") imagee = bs;
        if (this.props.name === "BA") imagee = ba;

        var link = './category/'

        if(this.props.name === "Mtech" || this.props.name === "Btech")link += 'Engg'
        else link+=this.props.name

         
        const mystyle = {
            backgroundImage: `url(${imagee})`
        };
        
        return(
            <div className={styles.card_container} style={mystyle} onClick={() => this.props.history.push(link)}>
                <div className={styles.labelname}>
                    {this.props.name}

                </div>

                <div className={styles.overlay}>
                    

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