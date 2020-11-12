import React, {Component} from 'react'
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import './OrderPage.css'
import {Row, Col} from 'react-bootstrap';
import {placeDirectOrder} from '../../actions/order_actions'
import {clearCart} from '../../actions/cart_actions'
import { showDialog } from "../../actions/dialog_actions";
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
         console.log(data);
        const res = await loadScript(
            "https:checkout.razorpay.com/v1/checkout.js"
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
         console.log(this.props)
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
        console.log(this.props)
    }

    render(){
        return (
            <div>
                <div className='card-container'>
                    <div className='card payment'>
                        <p>Confirm payment to place order</p>
                    </div>
                </div>
            </div>










        //     <div>
        //         <div>
        //             <h2 className="checkout-title"> Your Cart</h2>
        //             <br />
        //             <br />
        //             <h3>Order Summary: </h3>
        //             <br />
        //         </div>
        //         <Row>

        //             <Col xs="9">
        //                 <div className="checkout-left">
        //                 <div className="d-flex flex-column">
        //                                     <label>
        //                                         {" "}
        //                                         <input
        //                                             type="radio"
        //                                             name="mode"
        //                                             value="online"
        //                                             onChange={(e) =>
        //                                                 this.setState({
        //                                                     ...this.state,
        //                                                     mode:
        //                                                         e.target.value,
        //                                                 })
        //                                             }
        //                                         />{" "}
        //                                         Online Payment
        //                                     </label>
        //                                     <label>
        //                                         {" "}
        //                                         <input
        //                                             type="radio"
        //                                             name="mode"
        //                                             value="cash"
        //                                             onChange={(e) =>
        //                                                 this.setState({
        //                                                     ...this.state,
        //                                                     mode:
        //                                                         e.target.value,
        //                                                 })
        //                                             }
        //                                         />{" "}
        //                                         Cash On delivery
        //                                     </label>
        //                                 </div>
        //                                 <button
        //                                 className={
        //                                     "btn w-100 btn-lg"
        //                                 }
        //                                 onClick={this.stagePayment}
        //                             >
        //                                 Place Order
        //                             </button>
        //                 </div>
        //             </Col>

        //             <Col xs="3">
        //                 <div className="checkout-right">
                            
        //                 </div>
        //             </Col>
        //         </Row>

        //         <div>
        //             <h3>Total Price:  RS. To render </h3>
        //         </div>

        //         <div>
        //             <h3> Delivery address: </h3>
        // <p> {this.props.currentOrder.address} </p>
        //             <p></p>
        //         </div>
        //     </div>
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
