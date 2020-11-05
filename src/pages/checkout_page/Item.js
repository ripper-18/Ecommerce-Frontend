import React,{Component} from 'react'
import "./Item.css"
class Item extends Component {

    render(){
    return (
        <div className = "product">
        
            <div className="producr-info">
                <p>{this.props.data.book.name}  </p>
                <p className= "product-price">
                    
             <strong>{this.props.data.quantity}</strong>
                </p>
            </div>
        </div>
    )}
}

export default Item
