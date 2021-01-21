import React,{Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import styles from './CourseCard.module.css';
import BaHEco from './BaHEco.jpeg'
import BaHEng from './BaHEng.jpeg'
import BaHPsy from './BaHPsy.jpeg'
import BcomH from './BcomH.jpg'
import BcomP from './BcomP.jpg'
import Bms from './Bms.jpeg'
import BscHMat from './BscHMat.jpeg'
import Shivdas from './Shivdas.jpeg'
class CourseCard extends Component{
    
    render(){
        let imagee;
        if(this.props.name==="BaHEco"){
            imagee=BaHEco
        }else if(this.props.name==="BaHEng"){
            imagee=BaHEng
        }
        else if(this.props.name==="BaHPsy"){
            imagee=BaHPsy
        }
        else if(this.props.name==="BcomH"){
            imagee=BcomH
        }
        else if(this.props.name==="BcomP"){
            imagee=BcomP
        }
        else if(this.props.name==="Bms"){
            imagee=Bms
        }
        else if(this.props.name==="BscHMat"){
            imagee=BscHMat
        }
        else if(this.props.name==="Shivdas"){
            imagee=Shivdas
        }
        

        var link = './category/'

        link+=this.props.name;
         
        
        
        return(
            <div className={styles.outer}>
            <div className={styles.card_container}  onClick={() => this.props.history.push(link)}>
                <img src={imagee} alt={'course'} className={styles.cardimg}/>
                <div className={styles.overlay}>
                </div>
            </div>
            <div className={styles.label}  onClick={() => this.props.history.push(link)}>
                {(this.props.name)}
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