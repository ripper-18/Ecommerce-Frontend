import React, {Component} from 'react';
import { Tabs } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import   "./profile.css";
import {connect} from 'react-redux';
import {logoutUser,updateUser} from '../../actions/auth_actions'
import {getPastOrders} from '../../actions/order_actions'
import  "./order.css";

class Profile extends Component {

    state={
        isDisabled: true,
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

    updateUserfunc=()=>{
        
        if(this.state.user.name!==0){
            if(this.state.user.email!==0){
                console.log("update")
                this.setState({ isDisabled: !this.state.isDisabled })
                this.props.updateUser(this.state.user,this.props.auth.token)
                console.log(this.props.auth)
            }
            else{
                alert("Email can't be empty!")
            }
        }
        else{
            alert("Name can't be empty!")
        }
    }
    render(){
        return(
            <div className='outer_container'>
               
                <br></br>
                <div className="card_container">
                    <div className='card'>
                        <Tabs
                            defaultActiveKey="overview"
                            id="uncontrolled-tab-example"
                        >
                            <Tab eventKey="overview" title="Account Overview">
                              
                                    <br/>
                                    <center>
                                    <button disabled={this.state.isDisabled} onClick={()=>this.updateUserfunc()} >Update</button>
                                    <input type="button" value="Edit" disabled={!this.state.isDisabled} onClick={() => {
                                        this.setState({ isDisabled: !this.state.isDisabled })
                                    }} />
                                    </center>
                                    <p>Name: </p>
                <input value={this.state.user.name} onChange={e => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      name: e.target.value
                    }
                  })
                }} value={this.state.user.name} disabled={this.state.isDisabled} />
                <p>Email: </p>
                <input value={this.state.user.email} onChange={e => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      email: e.target.value
                    }
                  })
                }} value={this.state.user.email} disabled={this.state.isDisabled} />
                <p>Phone: </p>
                <input value={this.state.user.phone} onChange={e => {
                  this.setState({
                    user: {
                      ...this.state.user,
                      phone: e.target.value
                    }
                  })
                }} value={this.state.user.phone} disabled={this.state.isDisabled} />

<button onClick={()=>this.props.logoutUser(this.props.history)}>Logout User</button>
                            </Tab>
                            <Tab eventKey="orders" title="Previous Orders">
                                <br></br>
                                <br></br>
                                <div className='order_container'>
            
            
            <h3><b>Order Id: </b></h3>
            <h3><b>Order Status: </b></h3>
            <h3><b>Date: </b></h3>
            <h4><b>......Click here to get full information about the order</b></h4>
        </div>
        
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

export default connect(mapStateToProps,{logoutUser,getPastOrders,updateUser})(withRouter(Profile));