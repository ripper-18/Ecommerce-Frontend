import React from 'react'
import './Cart.css'
import {Row, Col} from 'react-bootstrap';

import Item from './Item'
import Subtotal from './Subtotal';

function Cart() {
    return (
        <div>
             <div>
                <h2 className="checkout-title"> Your Cart</h2>
            </div>
            <Row>
                <Col xs="9">
                <div className="checkout-left">
                   

                    <Item></Item>
                    <Item></Item>

                </div>
                </Col>

                <Col xs="3">
                <div className="checkout-right">

                    <Subtotal></Subtotal>
                </div>
                </Col>
            </Row>

        </div>
    )
}

export default Cart
