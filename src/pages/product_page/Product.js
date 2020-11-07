import React,{Component} from 'react'
import {Row, Col} from 'react-bootstrap';
import './Product.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getBookbyId} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'
import ProductCarousel from './ProductCarousel'

class Product extends Component {
    state={
        id:""
    }

    async componentDidMount(){
       
    }


    render(){
    return (
        <div>
            
            <Row>
                <Col xs="6">
                <div className="product-image">
                   <ProductCarousel  image={this.props.book.image}/>

                </div>
                </Col>
                <Col xs="6">
                <h1 className="product-heading"> <strong>{this.props.book.name}</strong></h1>
                    <h2 class="product-author">{this.props.book.author} </h2>
    <h3 className="product-description">  {this.props.book.description}  </h3>
                    <h4 className="product-description">Edition: {this.props.book.edition} </h4>

                   

                    <h1 className="product-price"> Rs. {this.props.book.price} </h1>

                    <button className="product-button"> <h3>Add to Cart </h3></button>

                    <h3 class="product-detail-header">Book Details</h3>
                    <div className="product-details">
                        <div className="product-detail">
                        <strong>Subject</strong> : {this.props.book.subject}
                        <br/>
                        </div>
                        <div className="product-detail">
                        <strong>Publisher</strong> : {this.props.book.publisher}
                        <br/>
                        </div>
                        <div className="product-detail">
                        <strong>Weight</strong> :{this.props.book.weight}
                        <br/>
                        </div>
                    </div>

                    <div className="seller-details">
                        <h3> Seller Name: {this.props.book.seller.name} </h3>
                        <h4 className="product-description">  Address:  {this.props.book.seller.address} </h4>
                    </div>

                </Col>

            </Row>
            
        </div>
    )}
}

const mapStateToProps = (state) => ({
    book: state.book.currentBook,
    cart: state.cart,
    auth:state.auth
});

export default connect(mapStateToProps, {
    
    addToCart,
    removeFromCart,
    getBookbyId
})(withRouter(Product));

