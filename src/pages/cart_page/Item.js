import React, { Component } from 'react'
import "./Item.css"
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToCart,removeFromCart} from '../../actions/cart_actions'
class Item extends Component {

    componentDidMount(){
        console.log(this.props)
    }

    handleAddToCart = (elem) => {
        this.props.addToCart(elem);
    };

    handleRemoveFromCart = (elem) => {
        this.props.removeFromCart(elem,-1);
    };
    render(){
    return (
        <div className = "product">
           
            <img
            className='product-img'
            src={this.props.item.book.image[0]
            }
            />
            <div className="product-info">
                <p>{this.props.item.book.name}</p>
                <p className= "product-price">
                    <small>Rs.</small>
                    <strong>{this.props.item.book.price}</strong>
                    <strong>x</strong>
                    <small>{this.props.item.quantity}</small>
                </p>
            </div>
            
            <button className="productt-button"  onClick={() =>
                                    this.handleAddToCart(
                                        this.props.item.book
                                    )
                                }> Add to cart </button>
            <button className="productt-button"  onClick={() =>
                                    this.handleRemoveFromCart(
                                        this.props.item.book
                                    )
                                }> Remove from cart </button>
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
