import React from 'react'

import './OrderPage.css'
import {Row, Col} from 'react-bootstrap';
import Item from './Item'
import Subtotal from './Subtotal';

function OrderPage() {
    return (
        <div>
            <div>
                <h2 className="checkout-title"> Your Cart</h2>
                <br/>
                <br/>
                <h3>Order Summary: </h3>
                <br/>
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

            <div>
            <h3>Total Price:  RS. To render </h3> 
            </div>

            <div>
            <h3> Delivery address: </h3>
            <p> H E R E A D D A D D R E S S </p>
            <p></p> 
            </div>
        </div>
    )
}

export default OrderPage
