import React,{Component} from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'

class  Subtotal extends Component {
    render(){
    return (
        <div className="checkout-box">
            <CurrencyFormat
            renderText= {(value) => (
                <div class="checkout-details">
                    <p>
                        Subtotal  :  
            <strong>{this.props.subtotal} </strong>
                    </p>
                    <br/>
                    <p>
                        Delivery :
                        <strong> Rs. {this.props.delivery} </strong>
                    </p>
                    <p>
                        GST :
                        <strong> Rs. {((this.props.subtotal+this.props.delivery)*0.05).toFixed(2)} </strong>
                    </p>
                    <p>
                        Total Money :
                        <strong>{((this.props.subtotal+this.props.delivery)*1.05).toFixed(2)}</strong>
                    </p>
                

                </div>
            )}
            decimalScale= {2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"Rs."}
            />
        </div>
    )}
}

export default Subtotal
