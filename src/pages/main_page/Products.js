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
        this.props.getBooksByKeyword(this.props.filters,'s')
       // console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filters !== this.props.filters) {
            this.props.getBooksByKeyword(this.props.filters,'');
        }
      //  console.log( this.props)
    }
    render(){
        let {books}=this.props.book
        let { sortValue } = this.props;
        let display = books;
        console.log(display)
        if (sortValue === "0") {
            display = books.sort((a, b) => a._id - b._id);
        } else if (sortValue === "1") {
            display = books.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === "2") {
            display = books.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortValue === "3") {
            display = books.sort((a, b) => a.price - b.price);
        }
        else if (sortValue === "4") {
            display = books.sort((a, b) => b.price - a.price);
        }
    return (
        <div className= "products-page">
            {
                display.map((book,index)=>(
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
