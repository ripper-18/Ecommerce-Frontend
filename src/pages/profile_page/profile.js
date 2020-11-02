import React, {Component} from 'react';
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import styles from "./profile.css";
import Orders from './orderComponent';
import Information from './infoComponenet';
import Welcome from './welcomeComponent';
import {connect} from 'react-redux';

import {logoutUser} from '../../actions/auth_actions'

class Profile extends Component {

    /*state={
        user:{
            name:"",
            email:"",
            phone: ""
        },
        orderhistory:{

        }
    }*/

    componentDidMount(){
        console.log("hi")
    }
    
    

    render(){
        return(
            <div className='outer_container'>
                <Welcome name='aditya karn' />
                <br></br>
                <div className="card_container">
                    <div className='card'>
                        <Tabs
                            defaultActiveKey="overview"
                            id="uncontrolled-tab-example"
                        >

                            <Tab eventKey="overview" title="Account Overview">
                                <Information email='adityakarn@gmail.com' phone='98644501495' gender='male' password='aadi66546'  />

                                <div className='button_div'>
                                    <button >EDIT DETAILS</button>
                                    <button >MANAGE ADDRESS</button>


                                </div>


                            </Tab>
                            <Tab eventKey="orders" title="Previous Orders">
                                <br></br>
                                <br></br>
                                <Orders status='delivered' date='13/10/2020' id='15' />
                                <Orders status='delivered' date='13/10/2020' id='15' />
                                <Orders status='delivered' date='13/10/2020' id='15' />
                                <Orders status='delivered' date='13/10/2020' id='15' />
                                <Orders status='delivered' date='13/10/2020' id='15' />
                                <Orders status='delivered' date='13/10/2020' id='15' />

                            </Tab>

                        </Tabs>

                    </div>
                    


                </div>
                

            </div>

        )}
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps,{logoutUser})(Profile);