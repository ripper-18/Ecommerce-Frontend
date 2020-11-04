import React, { Component } from 'react'
import './Products.css'
import ProductItem from './ProductItem'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getBooks,getBooksByKeyword} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'
import {logoutUser} from '../../actions/auth_actions'

class Products extends Component {
    state={
        filters:{
            year:[],
            subject:[],
            course:[]
        }
    }

    componentDidMount(){
        // this.props.logoutUser(this.props.history)
        this.props.getBooksByKeyword(this.state.filters,'s')
        console.log(this.props)
    }

    render(){
        let {books}=this.props.book
    return (
        <div className= "products-page">
            {
                books.map((book,index)=>(
                    <div className="product-card">
                    <ProductItem
                    isEditable={true}
                    data={book}
                    addFunction={this.props.addToCart}
                    removeFunction={this.props.removeFromCart}
                    container={this.props.cart.bookCart}
                    />  
                    </div>
                ))
            }
            
        </div>
        
    )}
}
const mapStateToProps = (state) => ({
    book: state.book,
    cart: state.cart,
    auth:state.auth
});

export default connect(mapStateToProps, {
    getBooks,
    addToCart,
    removeFromCart,
    getBooksByKeyword,
    logoutUser
})(withRouter(Products));
