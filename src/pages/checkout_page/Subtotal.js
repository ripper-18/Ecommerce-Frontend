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
                        <strong>Rs. Something </strong>
                    </p>
                    <br/>
                    <p>
                        Delivery :
                        <strong> Rs. something </strong>
                    </p>
                    <p>
                        GST :
                        <strong> 20 </strong>
                    </p>
                    <p>
                        Total Money :
                        <strong> ++++ </strong>
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
