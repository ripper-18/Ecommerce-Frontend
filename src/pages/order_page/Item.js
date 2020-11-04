import React from 'react'
import "./Item.css"
function Item() {
    return (
        <div>
                <div className = "product">
                
                    <div className="producr-info">
                        <p>Communist Manifesto</p>
                        <p className= "product-price">
                            <small>Rs.</small>
                            <strong>150.00</strong>
                        </p>
                    </div>
                </div>
                
        </div>
    )
}

export default Item
