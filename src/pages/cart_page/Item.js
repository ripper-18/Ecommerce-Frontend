import React, { Component } from 'react'
import styles from "./Item.module.css"
import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../../actions/cart_actions'

class Item extends Component {

    handleAddToCart = (elem) => {
        this.props.addToCart(elem);
    };

    handleRemoveFromCart = (elem) => {
        this.props.removeFromCart(elem);
    };
    
    
    render(){
        let price_of_item = this.props.item.quantity * this.props.item.book.price;
    return (
        <div className = {styles.product_vin}>
            <div className={styles.column_ni}>
            <div className={styles.product_image_wrap}>
                <img
            className={styles.product_img}
            src={this.props.item.book.image[0]}
            alt={"cart-img"}
            />
            </div>
            </div>

            <div className={styles.product_details}>
                <div className={styles.price_area}>
                    <span className={styles.quantity_multiplier} >{this.props.item.quantity}x </span>
                    <span>{this.props.item.book.name}</span>
                </div>
                <div className={styles.button_area}>
                    <p id={styles.final_price}>{price_of_item}</p>
                    <button className={styles.add_subtrac_button} onClick={() =>
                        this.handleAddToCart(
                            this.props.item.book
                        )
                    }>+</button>
                    <button className={styles.add_subtrac_button} onClick={() =>
                        this.handleRemoveFromCart(
                            this.props.item.book
                        )
                    }> - </button>
                </div>
            </div>
            <hr></hr>
        </div>
    )}
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, { addToCart, removeFromCart })(
    Item
);
