import React from 'react'
import './Products.css'
import ProductItem from './ProductItem'

function Products() {
    return (
        <div className= "products-page">
            <div className="product-card">
                <ProductItem/>
            </div>
            <div className="product-card">
                <ProductItem/>
            </div>
            <div className="product-card">
                <ProductItem/>
            </div>
            <div className="product-card">
                <ProductItem/>
            </div>
            <div className="product-card">
                <ProductItem/>
            </div>
            
        </div>
        
    )
}

export default Products
