import React, {Component} from 'react';
import {Tabs} from "react-bootstrap";
import {Tab} from "react-bootstrap";
import {withRouter,Link} from 'react-router-dom'
import styles from "./profile.module.css";
import { connect} from 'react-redux';
import {
    logoutUser,
    updateUser
} from '../../actions/auth_actions'
import {
    getPastOrders
} from '../../actions/order_actions'
import "./order.css";
import InfoModal from './InfoModal'
import cx from 'classnames'


class Profile extends Component {

    state = {
        isDisabled: true,
        user: {
            name: this.props.auth.user.name,
            email: this.props.auth.user.email,
            phone: this.props.auth.user.phone
        },
        orderhistory: {
            orders: [],
            isInfOpen: [],

        }
    }

    componentDidMount() {
        //console.log(this.state)
        this.props.getPastOrders(this.props.auth.token);
        // console.log(this.props)
        let address = []
        this.props.pastOrders.map((addr, index) => (
            address[index] = false
        ))
        //console.log(address)

        //console.log(this.state)
        let a = []
        
        this.props.pastOrders.map((order)=>(
            a.push(order)
        ))
        this.setState({
            ...this.state,
            orderhistory: {
                ...this.state.orderhistory,
                isInfOpen: address,
                orders: a
            }

        })

        console.log(this.state)
    }

    setInfOpen = (value, index) => {
        let address = this.state.orderhistory.isInfOpen
        address[index] = value
        // console.log(this.state)
        this.setState({
            ...this.state,
            orderhistory: {
                ...this.state.orderhistory,
                isInfOpen: address,
            }
        })
    }

    updateUserfunc = () => {

        if (this.state.user.name !== 0) {
            if (this.state.user.email !== 0) {
                console.log("update")
                this.setState({
                    isDisabled: !this.state.isDisabled
                })
                this.props.updateUser(this.state.user, this.props.auth.token)
                console.log(this.props.auth)
            } else {
                alert("Email can't be empty!")
            }
        } else {
            alert("Name can't be empty!")
        }
    }
    render() {
        return ( <div className = 'outer_container' >

            <br/> <br/> <div className = "card_container" >
            <div className = 'card' >
            <Tabs defaultActiveKey = "overview"
             id = "uncontrolled-tab-example" >
            <Tab eventKey = "overview"
            title = "Account Overview" 
            >
           <div className="row justify-content-center mt-sm-3 pb-sm-5">
                            <div className="col-sm-3 mt-sm-3">
                                <div className="row pt-3 pt-sm-0 py-6 px-sm-3">
                                    <div className="pb-1 m-sm-0 d-sm-flex w-100">
                                        <div className="card-header bg-white mt-4 mx-3 px-0">
                                            <h2  >Welcome Back</h2>
                                            <h2  >{this.props.auth.user.name}</h2>
                                            <button
                                              style={{marginTop:"10px"}}
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.props.logoutUser(
                                                        this.props.history
                                                    )
                                                }
                                            >
                                                Logout
                                            </button>
                                            <button
                                            style={{marginLeft:"20px",marginTop:"10px"}}
                                                className="btn btn-outline-danger"
                                                onClick={() =>
                                                    this.setState({
                                                        ...this.state,
                                                        isDisabled:false
                                                    })
                                                }
                                                disabled={!this.state.isDisabled}
                                            >
                                                Edit
                                            </button>
                                            <button
                                           style={{marginLeft:"20px",marginTop:"10px"}}
                                                className="btn btn-outline-danger"
                                                onClick={() =>
                                                    {this.setState({
                                                        ...this.state,
                                                        isDisabled:true
                                                    });
                                                this.updateUserfunc()}
                                                }
                                                disabled={this.state.isDisabled}
                                            >
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3 pt-sm-0 py-4 px-sm-3">
                                    <div
                                        className={cx(
                                            styles.address,
                                            "card-body bg-white mt-2 mx-3 px-0"
                                        )}
                                    >
                                        <span className="font-weight-bold">
                                            Name:{" "}
                                        </span>
                                        <span>{(this.state.isDisabled)?(this.props.auth.user.name):(<input value={this.state.user.name} onChange={(e)=>this.setState({...this.state,
                                        user:{
                                            ...this.state.user,
                                            name:e.target.value
                                        }})}  />)}</span>
                                        <br />
                                        <span className="font-weight-bold">
                                            Email:{" "}
                                        </span>
                                    <span>{this.props.auth.user.email}</span>
                                        <br />
                                        <span className="font-weight-bold">
                                            Phone:{" "}
                                        </span>
                                        <span>{(this.state.isDisabled)?(this.props.auth.user.phone):(<input value={this.state.user.phone} onChange={(e)=>this.setState({...this.state,
                                        user:{
                                            ...this.state.user,
                                            phone:e.target.value
                                        }})}  />)}</span>
                                        <br />
                                    </div>
                                    <div className="pb-1 m-sm-0 d-sm-flex w-100">
                                        <div
                                            className={
                                                "card-body bg-white mt-2 mx-3 px-0"
                                            }
                                        >
                                            <button
                                                onClick={() =>
                                                    this.props.history.push(
                                                        "/address"
                                                    )
                                                }
                                                className="btn btn-outline-danger"
                                            >
                                                Manage Addresses
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
             </Tab> 
             <Tab eventKey = "orders"
            title = "Previous Orders" >

<div className="col-12 p-0 col-md-7" style={{marginLeft:"35%"}}>
                            <div className="py-4 px-3 mb-5" >
                                <div className="py-2 row">
                                    <div className="col-12 col-md-8">
                                        <h2 className="font-weight-bold">
                                            Your Past Orders
                                        </h2>
                                    </div>
                                </div>
                              
                                
                                    <div className="py-2 row">
                                    <div className="col-8">
                                        {this.props.pastOrders.length > 0 ? (
                                            this.props.pastOrders.map(
                                                (order, index) => (
                                                    <div
                                                        className="card my-3 p-2"
                                                        key={index}
                                                    >
                                                        <div>
                                                            <span className="font-weight-bold">
                                                                Order ID:
                                                            </span>{" "}
                                                            <span >
                                                                {order.orderId}
                                                            </span>
                                                            <br />
                                                            <span className="font-weight-bold">
                                                                Order Status:
                                                            </span>{" "}
                                                            <span className="text-capitalize">
                                                                {
                                                                    order.orderStatus
                                                                }
                                                            </span>
                                                            <br />
                                                            <span className="font-weight-bold">
                                                                Date:
                                                            </span>{" "}
                                                            <span>
                                                                {new Date(
                                                                    order.placedAt
                                                                ).toLocaleDateString(
                                                                    "en-GB"
                                                                )}
                                                            </span>
                                                            <br />
                                                        </div>
                                                        <div className={styles.more} onClick={()=>this.setInfOpen(true,index)}>
                                                           <span style={{color:"blue",fontSize:"px"}}>...</span> Click here to get full information about the order
                                                        </div>
                                                        <InfoModal 
                                                        infOpen={this.state.orderhistory.isInfOpen[index]}
                                                        setModalOpen={this.setInfOpen}
                                                        data={order}
                                                        index={index}
                                                        />
                                                    </div>
                                                )
                                            )
                                        ) : (
                                            <p>No past orders</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
            </Tab> 
            </Tabs>
             </div>
              </div> 
              </div>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    pastOrders: state.order.pastOrders
});

export default connect(mapStateToProps, {
    logoutUser,
    getPastOrders,
    updateUser
})(withRouter(Profile));