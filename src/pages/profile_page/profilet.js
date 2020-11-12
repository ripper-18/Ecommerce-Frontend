import React, {Component} from 'react';
import {Tabs} from "react-bootstrap";
import {Tab} from "react-bootstrap";
import {withRouter,Link} from 'react-router-dom'
import "./profile.css";
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
            title = "Account Overview" >
            <h1 className = "welcome-heading" > Your Account Details </h1> <br/>

            <p > Name: </p> <div className = "center-form" >
            <input className = "input-fields-main"
            value = {
                this.state.user.name
            }
            onChange = {
                e => {
                    this.setState({
                        user: {
                            ...this.state.user,
                            name: e.target.value
                        }
                    })
                }
            }
            
            disabled = {
                this.state.isDisabled
            }
            /> </div> 
            <p > Email: </p> <div className = "center-form" >
            <input value = {
                this.state.user.email
            }
            onChange = {
                e => {
                    this.setState({
                        user: {
                            ...this.state.user,
                            email: e.target.value
                        }
                    })
                }
            }
            
            disabled = {
                this.state.isDisabled
            }
            /> </div> 
            <p > Phone: </p> <div className = "center-form" >
            <input value = {
                this.state.user.phone
            }
            onChange = {
                e => {
                    this.setState({
                        user: {
                            ...this.state.user,
                            phone: e.target.value
                        }
                    })
                }
            }
            
            disabled = {
                this.state.isDisabled
            }
            /> </div> <br/>
            <p > Address: </p> <div className = "manage-address-div"
            style = {
                {
                    textAlign: "center"
                }
            } >
            <Link to = "/address" > Manage Addresses </Link>
            </div>
            <hr style = {
                {
                    width: "200px"
                }
            }
            />

            <center >
            <input className = "edit-button"
            type = "button"
            value = "Edit"
            disabled = {
                !this.state.isDisabled
            }
            onClick = {
                () => {
                    this.setState({
                        isDisabled: !this.state.isDisabled
                    })
                }
            }
            /> <button className = "update-button"
            disabled = {
                this.state.isDisabled
            }
            onClick = {
                () => this.updateUserfunc()
            } > Update </button>  
             </center>
              <div class = "account-page-button" >
            <button className = "logout-button"
            onClick = {
                () => this.props.logoutUser(this.props.history)
            } > Logout User </button>
            </div>
             </Tab> 
             <Tab eventKey = "orders"
            title = "Previous Orders" >
           
            <div className = 'order_container' >
            <div className = "py-2 row" >
            <h1 className = "welcome-heading" > Your Previous Orders </h1>
            <div className = "col-8" > {
                this.props.pastOrders.length > 0 ? (
                    this.props.pastOrders.map(
                        (order, index) => ( <div className = "card my-3 p-2"
                            key = {
                                index
                            } >
                            < div >
                            <span className = "font-weight-bold" >
                            Order ID:
                            </span>{" "} 
                            <span > {
                                order.orderId
                            } </span> 
                            <br/>
                            <span className = "font-weight-bold" >
                            Order Status:
                            </span>{" "} 
                            <span className = "text-capitalize" > {
                                order.orderStatus
                            } </span> 
                            <br/>
                            <span className = "font-weight-bold" >
                            Date:
                            </span>{" "} 
                            <span > {
                                new Date(
                                    order.placedAt
                                ).toLocaleDateString(
                                    "en-GB"
                                )
                            } </span> 
                            <br/>
                            </div>
                             <div className = "order-information"
                            onClick = {
                                () => this.setInfOpen(true, index)
                            } >
                            Click here to get full information about the order </div> 
                            <InfoModal infOpen = {
                                this.state.orderhistory.isInfOpen[index]
                            }
                            setModalOpen = {
                                this.setInfOpen
                            }
                            data = {
                                order
                            }
                            index = {
                                index
                            }
                            />
                             </div>
                        )
                    )
                ) : (<p> </p>
                )
            }

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