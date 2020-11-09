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
        let price_of_item = this.props.item.quantity * this.props.item.book.price;
    return (
        <div className = "product-vin">
            <div className='column-ni'>
            <div className='product-image-wrap'>
            <img
            className='product-img'
            src={this.props.item.book.image[0]
            }
            />
            </div>
            </div>

            <div className='product-details'>
                <div className='price-area'>
                    <span className='quantity-multiplier' >{this.props.item.quantity}x </span>
                    <span>{this.props.item.book.name}</span>


                </div>
                <div className='button-area'>
                    <p id='final-price'>{price_of_item}</p>
                    <button className="add-subtract-button" onClick={() =>
                        this.handleAddToCart(
                            this.props.item.book
                        )
                    }>+</button>
                    <button className="add-subtract-button" onClick={() =>
                        this.handleRemoveFromCart(
                            this.props.item.book
                        )
                    }> - </button>

                </div>
                

            </div>
            {/* <div className="product-info">
                <p>{this.props.item.book.name}</p>
                <p className= "product-price">
                    <small>Rs.</small>
                    <strong>{this.props.item.book.price}</strong>
                    <strong>x</strong>
                    <small></small>
                </p>
            </div> */}
            
            
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
