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
        this.props.getPastOrders(this.props.auth.token);

        let address = []
        this.props.pastOrders.map((addr, index) => (
            address[index] = false
        ))
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
    }

    setInfOpen = (value, index) => {
        let address = this.state.orderhistory.isInfOpen
        address[index] = value
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
                this.setState({
                    isDisabled: !this.state.isDisabled
                })
                this.props.updateUser(this.state.user, this.props.auth.token)
            } else {
                alert("Email can't be empty!")
            }
        } else {
            alert("Name can't be empty!")
        }
    }
    render() {
        return ( <div style={{overflowX:"hidden"}}>
            <br/> <br/> <div className = "card_container" >
            <div className = 'card' style={{marginBottom:"10px",margin:"auto"}} >
            <Tabs defaultActiveKey = "overview"
             id = "uncontrolled-tab-example" 
             >
            <Tab eventKey = "overview"
            title = "Account Overview" 
            className={cx(styles.tab)}
            >
           <div className="">
  
            <div className={styles.row}>
                                        <div className={styles.left}>
                                            <h2  className={styles.Welcome_heading}>Welcome <span className={styles.mid_heading}> Back </span></h2>
                                            <h2  className={styles.User_Name}>{(this.props.auth.user.name).charAt(0).toUpperCase() + (this.props.auth.user.name).substring(1)}!</h2>

                                        </div>
                                        
                                    
                                
                                <div className={styles.right}>

                                
                                <div className={styles.right_container}>        

                                    <div
                                        className={cx(
                                            styles.address,
                                        
                                        )}
                                    >
                                        <div className={styles.Profile_Info_Block}>
                                        <span className={styles.Profile_Attri}>
                                            Name:{" "}
                                        </span>
                                        <span className={styles.Profile_Attri_Values}>{(this.state.isDisabled)?(this.props.auth.user.name):(<input value={this.state.user.name} onChange={(e)=>this.setState({...this.state,
                                        user:{
                                            ...this.state.user,
                                            name:e.target.value
                                        }})}  />)}</span>
                                        <br />
                                        </div>

                                        <div className={styles.Profile_Info_Block}>
                                        <span className={styles.Profile_Attri}>
                                            Email:{" "}
                                        </span>
                                    <span className={styles.Profile_Attri_Values}>{this.props.auth.user.email}</span>
                                        <br />
                                        </div>

                                        <div className={styles.Profile_Info_Block}>
                                        <span className={styles.Profile_Attri}>
                                            Phone:{" "}
                                        </span>
                                        <span className={styles.Profile_Attri_Values}>{(this.state.isDisabled)?(this.props.auth.user.phone):(<input value={this.state.user.phone} onChange={(e)=>this.setState({...this.state,
                                        user:{
                                            ...this.state.user,
                                            phone:e.target.value
                                        }})}  />)}</span>
                                        <br />
                                        </div>
                                    </div>

                                        <div className={styles.button_container}>
                                    
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

                                            <button
                                              style={{marginLeft:"20px",marginTop:"10px" }}
                                                className="btn btn-danger"
                                                onClick={() =>
                                                    this.props.logoutUser(
                                                        this.props.history
                                                    )
                                                }
                                            >
                                                Logout
                                            </button>

                                    </div>
                                    <div className={styles.Manage_add_but_cont}>

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

<div className="col-12 p-0 col-md-7" style={{margin:"auto"}}>
                            <div className="py-4 px-3 mb-5" >
                                <div className="py-2 row justify-content-center">
                                    <div className="col-12 col-md-8">
                                        <h2 className="font-weight-bold">
                                            Your Past Orders
                                        </h2>
                                    </div>
                                </div>
                                    <div className="py-2 row justify-content-center">
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