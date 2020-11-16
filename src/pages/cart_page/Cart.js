import React, { Component } from 'react'
import './Cart.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToCart,removeFromCart,clearCart} from '../../actions/cart_actions'
import Item from './Item'
import CurrencyFormat from "react-currency-format";
import Stepper from '../common/stepper'




class Cart  extends Component  { 

    getCount = (cart) => {
        let counts = {};
        let result = [];
        for (let i = 0; i < cart.length; i++) {
            let index = cart[i]._id;
            counts[index] = counts[index] ? counts[index] + 1 : 1;
        }
     
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {
                book: cart.find((o) => o._id === Object.keys(counts)[i]),
                quantity: Object.values(counts)[i],
            };
        }
        return result;
    };

    getSubTotal = () => {
       
        return (
            this.props.cart.bookCart.reduce((a, b) => a + b.price, 0)
        );
    };
    
    render(){
        const dev_charge = this.props.cart.bookCart.length?(30):(0);
    return (
        <div>
           <Stepper number={0}/>
             <div>
                <h2 className="checkout-title"> Your Cart</h2>
            </div>
            <div className='checkout-wrapper'>
         
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
                <div className="checkout-right">
                <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal  :  
                    <strong>{this.getSubTotal().toFixed(2)}</strong>
                </p>
               
                <p>
                    Delivery :
                    <strong> {dev_charge} </strong>
                </p>
                <p> GST (5%):
            <strong>{(this.getSubTotal()*0.05)}</strong>
                </p>
                <p>
                    Final Total :
                    <strong> {(this.getSubTotal() +
                    this.getSubTotal() * 0.05 +
                    30).toFixed(2)} </strong>
                </p>

                </>
            )}
            decimalScale= {2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"Rs."}
            />
            {this.props.auth.token?(
  <button className="standardButton" disabled={!this.getSubTotal()} onClick={()=>this.props.history.push('/checkout')}>Proceed to Checkout</button>
            ):(
                 <button className="standardButton" onClick={()=>this.props.history.push('/login')}>Please sign in to Continue</button>
            )}
         
        </div>
                        <button className='clear-cart-button' onClick={this.props.clearCart}>Clear Cart</button>
                </div>
                
            </div>

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

