import React, {Component} from 'react';
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import styles from "./profile.css";
import Orders from './orderComponent';
import Information from './infoComponenet';
import Welcome from './welcomeComponent';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/auth_actions'
import {getPastOrders} from '../../actions/order_actions'

class Profile extends Component {

    state={
        user:{
            name:this.props.auth.user.name,
            email:this.props.auth.user.email,
            phone: this.props.auth.user.phone
        },
        orderhistory:{
            orders:[],
            isInfOpen:[],
            showMore:false
        }
    }

    componentDidMount(){
        //console.log(this.state)
        this.props.getPastOrders(this.props.auth.token);
        console.log(this.props)
        /*let address=[]
      this.props.pastOrders.map((addr,index)=>(
        address[index]=false
      ))
      console.log(address)
     
      console.log(this.state)
      let a=[]
      this.props.pastOrders.map((order,index)=>{
          if(order.orderStatus==="delivered" || order.orderStatus==="out_for_delivery" ){
              a.push(order)
          }
      })
      this.setState({
          ...this.state.orderhistory,
          isInfOpen:address,
          temp:a
      })*/

    }

    setInfOpen = (value,index) => {
        let address=this.state.isInfOpen
        address[index]=value
       // console.log(this.state)
        this.setState({
            ...this.state,
            isInfOpen: address,
            
        });
    }
    render(){
        return(
            <div className='outer_container'>
                <Welcome name={this.state.user.name} />
                <br></br>
                <div className="card_container">
                    <div className='card'>
                        <Tabs
                            defaultActiveKey="overview"
                            id="uncontrolled-tab-example"
                        >

                            <Tab eventKey="overview" title="Account Overview">
                                <Information email={this.state.user.email} phone={this.state.user.phone}   />

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
    pastOrders:state.pastOrders
});

export default connect(mapStateToProps,{logoutUser,getPastOrders})(withRouter(Profile));