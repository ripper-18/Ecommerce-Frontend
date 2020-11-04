import React, { Component } from 'react'
import './ProductItem.css'

class ProductItem extends Component {
  componentDidMount(){
    //console.log(this.props)
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
                <p>{this.props.data.name}</p>
                <p className= "product-price">
                    <small>Rs.</small>
                    <strong>{
                    this.props.data.price}</strong>
                </p>
            </div>
            
             {this.props.container.filter(
                                    (item) => item._id === this.props.data._id
                                ).length > 0 ? (
                                        <button
                                            style={{ color: "red" }}
                                            onClick={this.handleRemoveFromCart}
                                        >
                                            {"-"}
                                        </button>
                                    ) : (
                                        <span />
                                    )}
                                {this.props.container.filter(
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
                                    )}
                                {this.props.isEditable ? (
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
}

export default ProductItem
