import React, { Component } from 'react'
import './Cart.css'
import {Row, Col,Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToCart,removeFromCart,clearCart} from '../../actions/cart_actions'
import Item from './Item'
import Subtotal from './Subtotal';


class Cart  extends Component  {
    componentDidMount(){
        console.log(this.props)
    }    

    getCount = (cart) => {
        let counts = {};
        let result = [];
        for (let i = 0; i < cart.length; i++) {
            let index = cart[i]._id;
            counts[index] = counts[index] ? counts[index] + 1 : 1;
        }
        // return counts;
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {
                book: cart.find((o) => o._id === Object.keys(counts)[i]),
                quantity: Object.values(counts)[i],
            };
        }
        return result;
    };

    getSubTotal = () => {
       
        //   console.log(this.props.cart)
        return (
            this.props.cart.bookCart.reduce((a, b) => a + b.price, 0)
        );
    };
    
    render(){
        const dev_charge = this.props.cart.bookCart.length?(30):(0);
    return (
        <div>
             <div>
                <h2 className="checkout-title"> Your Cart</h2>
            </div>
            <Row>
                <Col xs="9">
                    
                <div className="checkout-left">
                <div id='subheading-div'>
                    <div className='sub1'>Items</div>
                    <div className='sub2'></div>
                    <div className='sub1'>Price</div>
                </div>
                {this.getCount(this.props.cart.bookCart)
                                    .sort((a, b) =>
                                        a.book.name < b.book.name ? -1 : 1
                                    )
                                    .map((item, index) => (
                                        <Item key={index} item={item} />
                                    ))}

                </div>
                </Col>

                <Col xs="3">
                <div className="checkout-right">

                    <Subtotal 
                    subtotal={this.getSubTotal()}
                    delivery={dev_charge}
                    gst={5}
                    ></Subtotal>
                        <button className='clear-cart-button' onClick={this.props.clearCart}>Clear Cart</button>
                </div>
                </Col>
            </Row>

        </div>
    )}
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth,
   
});

export default connect(mapStateToProps, {
    addToCart,
    removeFromCart,
    clearCart,
})(withRouter(Cart));

