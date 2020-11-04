import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { clearCart } from "../../actions/cart_actions";

import './OrderPage.css'
import {Row, Col} from 'react-bootstrap';
import Item from './Item'
import Subtotal from './Subtotal';

import config from "../../config";


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
        // console.log(data);
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        ); 
        if (!res) {
            alert("Razorpay failed to load. Are you online?");
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", this.props.auth.token);

        const options = {
            key: config.rzp_id,//make a flexible dev and live mode key accepter
            currency: "INR",//backend
            amount: "10000",//backend
            order_id: "6",
            name: "DUBookex",
            description: "Confirm payment to place order",
            handler: (response) => {
                this.onPaymentComplete(response);
            },
            prefill: {
                name: "ramon",
                email: "ramzy@gmail.com",
                contact: "9900990099",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    // stagePayment = () => {
    //     console.log(this.props)
    //     if (this.state.mode === "") {
    //         alert("Please select a payment mode");
    //     } else {
    //         this.props
    //             .placeDirectOrder(
    //                 this.props.currentOrder.address,
    //                 this.state.mode,
    //                 this.props.currentOrder.dishes,
    //                 this.props.currentOrder.coupon,
    //                 this.props.auth.token,
    //                 this.props.currentOrder.originalBill,
    //                 this.props.currentOrder.discountedBill,
    //                 this.props.currentOrder.finalAmount,
    //                 this.props.currentOrder.delivery,
    //                 this.props.currentOrder.gst

    //             )
    //             .then((res) => {
    //                 if (res.order.orderStatus === "staged") {
    //                     this.displayRazorpay(res);
    //                 } else if (res.order.orderStatus === "placed") {
    //                     this.props.clearCart()
    //                     this.props.history.push("/orders");
    //                 } else {
    //                     this.props.showDialog("Your order could not be placed");
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 this.props.showDialog("Your order could not be placed");
    //             });
    //     }
    // };


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
                    this.props.history.push("/orders");
                }
            })
        );
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render(){
        return (
            <div>
                <div>
                    <h2 className="checkout-title"> Your Cart</h2>
                    <br />
                    <br />
                    <h3>Order Summary: </h3>
                    <br />
                </div>
                <Row>

                    <Col xs="9">
                        <div className="checkout-left">



                            <Item></Item>
                            <Item></Item>

                        </div>
                    </Col>

                    <Col xs="3">
                        <div className="checkout-right">

                            <Subtotal></Subtotal>
                        </div>
                    </Col>
                </Row>

                <div>
                    <h3>Total Price:  RS. To render </h3>
                </div>

                <div>
                    <h3> Delivery address: </h3>
                    <p> H E R E A D D A D D R E S S </p>
                    <p></p>
                </div>
            </div>
        )
    }
    
}

export default OrderPage
