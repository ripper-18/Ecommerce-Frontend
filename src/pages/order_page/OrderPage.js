import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import styles from './OrderPage.module.css'
import {Row, Col} from 'react-bootstrap';
import {placeDirectOrder} from '../../actions/order_actions'
import {clearCart} from '../../actions/cart_actions'
import { showDialog } from "../../actions/dialog_actions";
import config from "../../config";
import Stepper from '../common/stepper'



const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

class OrderPage extends Component{  

    state = {
        mode: "",
    };
    
    displayRazorpay = async (data) => {
         //console.log(data);
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        ); 

      //  console.log(res)
        if (!res) {
           // console.log(data)
            alert("Razorpay failed to load. Are you online?");
            return;
        }

      

        const options = {
            key: config.rzp_id,//make a flexible dev and live mode key accepter
            currency: "INR",//backend
            amount: data.order.finalAmount,//backend
            order_id: data.order.razorpayOrderId,
            name: "DUBookex",
            description: "Confirm payment to place order",
            handler: (response) => {
                this.onPaymentComplete(response);
            },
            prefill: {
                name: this.props.auth.user.name,
                email: this.props.auth.user.email,
                contact: this.props.auth.user.phone,
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

     stagePayment = () => {
         //console.log(this.props)
         if (this.state.mode === "") {
            this.props.showDialog("Please select a payment mode");
         } else {
             this.props
                 .placeDirectOrder(
                     this.props.currentOrder.address,
                     this.state.mode,
                     this.props.currentOrder.books,
                     this.props.auth.token,
                     this.props.currentOrder.originalBill,
                     this.props.currentOrder.finalAmount,
                     this.props.currentOrder.delivery,
                     this.props.currentOrder.gst

                 )
                 .then((res) => {
                     if (res.order.orderStatus === "staged") {
                         this.displayRazorpay(res);
                     } else if (res.order.orderStatus === "placed") {
                         
                         this.props.showDialog("Your order was placed succesfully.")
                         this.props.clearCart()
                         this.props.history.push("/profile");
                     } else {
                        this.props.showDialog("Your order could not be placed");
                     }
                 })
                 .catch((err) => {
                     console.log(err);
                     this.props.showDialog("Your order could not be placed");
                 });
         }
     };


    onPaymentComplete = ({
        razorpay_signature,
        razorpay_payment_id,
        razorpay_order_id,
    }) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", this.props.auth.token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            razorpay_signature,
            razorpay_payment_id,
            razorpay_order_id,
        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        return fetch(config.user + "order/verify", requestOptions).then((res) =>
            res.json().then((res) => {
                if (res.sucessOrder.orderStatus === "placed") {
                    this.props.clearCart()
                    this.props.history.push("/profile");
                }
            })
        );
    };

    componentDidMount() {
        window.scrollTo(0, 0)
     
    }

    render(){
       
        const arr = this.props.currentOrder.finalAddress.address.split(" ");
        return (
            <div>
                <Stepper number={2}/>
                <div className={styles['card-cont']}>
                    <div className={styles['payment-card']}>
                        <p style={{fontSize:"24px",margin:"0 80px"}}>Confirm payment to place order</p>
                        
                        <br></br>
                        <div style={{borderBottom:"1px solid lightgrey"}}></div>
                        <br></br>

                        <div className={styles["card-body"]}>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    Total Payable:{" "}
                                </span>
                                <span>
                                    {this.props.currentOrder.finalAmount}
                                </span>
                            </div>
                            <br></br>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    Delivery address:{" "}
                                </span>

                                <div style={{ wordWrap: "break-word",maxWidth: "30%",textAlign:"right"}}>
                                    {this.props.currentOrder.finalAddress.address}
                                </div>
                                
                                
                                
                                
                            </div>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    {" "}
                                </span>
                                <span>
                                    {this.props.currentOrder.finalAddress.city}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    {" "}
                                </span>
                                <span>
                                    {this.props.currentOrder.finalAddress.state}
                                </span>
                            </div>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    {" "}
                                </span>
                                <span>
                                    {this.props.currentOrder.finalAddress.pincode}
                                </span>
                            </div>
                            <br></br>
                            <div className="d-flex justify-content-between mx-3">
                                <span className={styles["font-weight-bold"]}>
                                    Contact Number:{" "}
                                </span>
                                <span>
                                    {this.props.currentOrder.finalAddress.phone}
                                </span>
                            </div>
                            <br></br>
                            
                            <div className="d-flex justify-content-between mx-3 mt-3">
                                <div>
                                    <span className={styles["font-weight-bold"]}>
                                        Payment Mode:{" "}
                                    </span>
                                    <p>{this.state.selectedAddress}</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <label>
                                        {" "}
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="online"
                                            onChange={(e) =>
                                                this.setState({
                                                    ...this.state,
                                                    mode:
                                                        e.target.value,
                                                })
                                            }
                                        />{" "}
                                            Online Payment
                                                
                                            </label>
                                    <label>
                                        {" "}
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="cash"
                                            onChange={(e) =>
                                                this.setState({
                                                    ...this.state,
                                                    mode:
                                                        e.target.value,
                                                })
                                            }
                                        />{" "}
                                                Cash On delivery
                                            </label>
                                </div>
                            </div>
                            <div style={{ borderBottom: "1px solid lightgrey",marginTop:"10px" }}></div>
                        </div>

                        <div className="card-footer bg-white">
                            <button 
                                className={styles['place-orrder-button']}
                                style={{marginTop:"2%"}}
                                
                                onClick={this.stagePayment}
                            >
                                Place Order
                                    </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth,
    currentOrder: state.order.currentOrder,
});
export default connect(mapStateToProps, {
    placeDirectOrder,
    clearCart,
    showDialog
   
})(withRouter(OrderPage));
