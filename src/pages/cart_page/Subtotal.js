import React,{Component} from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'

class  Subtotal extends Component {
    render(){
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal  :  
                    <strong>{this.props.subtotal.toFixed(2)}</strong>
                </p>
                <br/>
                <p>
                    Delivery :
                    <strong> {this.props.delivery} </strong>
                </p>
                <p>
                    GST :
                    <strong> 20 </strong>
                </p>

                </>
            )}
            decimalScale= {2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"Rs."}
            />
            
            <button>Proceed to Checkout</button>
        </div>
    )}
}

export default Subtotal
