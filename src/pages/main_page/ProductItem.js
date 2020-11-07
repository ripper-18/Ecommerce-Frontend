import React, { Component } from 'react'
import './ProductItem.css'
import {Link,withRouter} from 'react-router-dom'

class ProductItem extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  handleAddToCart = () => {
   
        this.props.addFunction({  ...this.props.data});
    
};
handleRemoveFromCart = () => {
    this.props.removeFunction({
        
        ...this.props.data,
    });
};
    render(){
    return (
        <div className = "product-individual">
           
           <img
           src={this.props.data.image[0]}
           className="product-image"
           />
            <div className="product-info">
               <p onClick={()=>this.props.history.push(`/product/${this.props.data._id}`)}>{this.props.data.name}</p> 
                <p className= "product-price">
                    <small>Rs.</small>
                    <strong>{
                    this.props.data.price}</strong>
                </p>
            </div>
            

            
             {this.props.container.filter(
                                    (item) => item._id === this.props.data._id
                                ).length <= 0 ? (
                                        <button
                                        style={{ color: "red" }}
                                        onClick={this.handleAddToCart}
                                    >
                                        {"Add To Cart"}
                                    </button>

                                        
                                    ) : (
                                        <div>
                                         <button
                                            style={{ color: "red" }}
                                            onClick={this.handleRemoveFromCart}
                                        >
                                            {"-"}
                                        </button> 

                                        <button button style={{ color: "red" }}>
                                        {
                                            this.props.container.filter(
                                                (item) =>
                                                    item._id ===
                                                    this.props.data._id
                                            ).length
                                        }
                                        </button>

                        {this.props.isEditable && this.props.container.filter(
                            (item) =>
                                item._id ===
                                this.props.data._id
                        ).length < this.props.data.countInStock ? (
                                                <button
                                                    style={{ color: "red" }}
                                                    onClick={this.handleAddToCart}
                                                >
                                                    {"+"}
                                                </button>
                                            ) : (
                                                <span />
                                            )}

                                        </div>
                                        
                    
                                       
                                    )}
                                {/* {this.props.container.filter(
                                    (item) => item._id === this.props.data._id
                                ).length > 0 ? (
                                        <button style={{ color: "red" }}>
                                            {
                                                this.props.container.filter(
                                                    (item) =>
                                                        item._id ===
                                                        this.props.data._id
                                                ).length
                                            }
                                        </button>
                                    ) : (
                                        <span />
                                    )} */}
                                    {/* {this.props.isEditable && this.props.container.filter(
                                        (item) => item._id === this.props.data._id
                                    ).length > 0 ? (
                                    <button
                                        style={{ color: "red" }}
                                        onClick={this.handleAddToCart}
                                    >
                                        {"+"}
                                    </button>
                                ) : (
                                        <span />
                                    )} */}
        </div>
    )}
}

export default withRouter(ProductItem)
