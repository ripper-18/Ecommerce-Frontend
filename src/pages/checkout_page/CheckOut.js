import React from 'react'
import Subtotal from './Subtotal'
import OrderDetails from './OrderDetails'
import Item from './Item'

import './CheckOut.css'

function CheckOut() {
    return (
        <div>
            <h1>Checkout Page</h1>

            <Item></Item>

            <Subtotal/>

            <h3> Address: </h3>
            <p> ajkffokaf akfoafa f afiaof kafiaf afiaf afi </p> <button>Change address</button>
            <button className="checkout-button">Pay</button>
        </div>
    )
}

export default CheckOut
