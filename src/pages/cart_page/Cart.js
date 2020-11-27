import React, { Component } from 'react'
import styles from './Cart.module.css'
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
        <div style={{backgroundColor:"white"}}>
           <Stepper number={0}/>
             <div>
                <h2 className={styles.checkout_title}> Your Cart</h2>
            </div>
            <div className={styles.checkout_wrapper}>
         
                <div className={styles.checkout_left}>
                <div id={styles.subheading_div}>
                    <div className={styles.sub1}>Items</div>
                    <div className={styles.sub2}></div>
                    <div className={styles.sub1}>Price</div>
                </div>
                {this.getCount(this.props.cart.bookCart)
                                    .sort((a, b) =>
                                        a.book.name < b.book.name ? -1 : 1
                                    )
                                    .map((item, index) => (
                                        <Item key={index} item={item} />
                                    ))}

                </div>
                <div className={styles.checkout_right}>
                <div className={styles.subtotal}>
            <CurrencyFormat
            renderText= {(value) => (
                <div style={{backgroundColor:"white"}}>
                <p>
                                        <span style={{fontWeight:"bolder",fontSize:"20px"}}>Subtotal  :  </span>
                                        <span style={{fontWeight:"lighter"}}>{this.getSubTotal().toFixed(2)}</span>
                </p>
               
                <p>
                                        <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Delivery  :  </span>
                                        <span style={{ fontWeight: "lighter" }}>{dev_charge}</span>
                </p>

                                    <p>
                                        <span style={{ fontWeight: "bolder", fontSize: "20px" }}>GST(5%)  :  </span>
                                        <span style={{ fontWeight: "lighter" }}>{(this.getSubTotal() * 0.05)}</span>
                                    </p>

                                    

                                    <p>
                                        <span style={{ fontWeight: "bolder", fontSize: "20px" }}>Final Total:  </span>
                                        <span style={{ fontWeight: "lighter" }}>{(this.getSubTotal() +
                                            this.getSubTotal() * 0.05 +
                                            30).toFixed(2)}</span>
                                    </p>
                
                
               

                </div>
            )}
            decimalScale= {2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"Rs."}
            />
            {this.props.auth.token?(
  <button className={styles.standardButton} disabled={!this.getSubTotal()} onClick={()=>this.props.history.push('/checkout')}>Proceed to Checkout</button>
            ):(
                 <button className={styles.standardButton} onClick={()=>this.props.history.push('/login')}>Please sign in to Continue</button>
            )}
         
        </div>
                        <button className={styles.clear_cart_button} onClick={this.props.clearCart}>Clear Cart</button>
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

