import React,{Component} from 'react'
import {Row, Col} from 'react-bootstrap';
import './Product.css';
import {connect} from 'react-redux'

class Product extends Component {
    render(){
    return (
        <div>
            
            <Row>
                <Col xs="6">
                <div className="product-image">
                    <img src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product-image-individual"></img>
                    <img src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product-image-individual"></img>
                    <img src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product-image-individual"></img>
                    <img src="https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="product-image-individual"></img>

                </div>
                </Col>
                <Col xs="6">
                <h1 className="product-heading"> <strong>Book Name</strong></h1>
                    <h2 class="product-author">Author Name </h2>
                    <h3 className="product-description"> Here we will print the description of the book.</h3>
                    <h4 className="product-description"> Edition </h4>

                   

                    <h1 className="product-price"> Rs. 150 </h1>

                    <button className="product-button"> <h3>Add to Cart </h3></button>

                    <h3 class="product-detail-header">Book Details</h3>
                    <div className="product-details">
                        <div className="product-detail">
                        <strong>Subject</strong> : To Render
                        <br/>
                        </div>
                        <div className="product-detail">
                        <strong>Publisher</strong> : To Render
                        <br/>
                        </div>
                        <div className="product-detail">
                        <strong>Year of publishing</strong> : To Render
                        <br/>
                        </div>
                        <div className="product-detail">
                        <strong>Weight</strong> : To Render
                        <br/>
                        </div>
                    </div>

                    <div className="seller-details">
                        <h3> Seller Name</h3>
                        <h4 className="product-description"> Seller Address </h4>
                    </div>

                </Col>

            </Row>
            
        </div>
    )}
}

export default Product
