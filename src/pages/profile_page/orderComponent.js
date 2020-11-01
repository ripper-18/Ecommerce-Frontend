import React, { Component } from 'react';
import styles from "./order.css";

function Orders(props){
    return(
        <div className='order_container'>
            
            
            <h3><b>Order Id: </b>{props.id}</h3>
            <h3><b>Order Status: </b>{props.status}</h3>
            <h3><b>Date: </b>{props.date}</h3>
            <h4><b>......Click here to get full information about the order</b></h4>
        </div>
    );   

}

export default Orders;