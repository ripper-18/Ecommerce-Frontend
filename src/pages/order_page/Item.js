import React from 'react'
import styles from "./Item.module.css"
function Item() {
    return (
        <div>
                <div className = {styles.product}>
                
                    <div className={styles["producr-info"]}>
                        <p>Communist Manifesto</p>
                        <p className= {styles["product-price"]}>
                            <small>Rs.</small>
                            <strong>150.00</strong>
                        </p>
                    </div>
                </div>
                
        </div>
    )
}

export default Item
