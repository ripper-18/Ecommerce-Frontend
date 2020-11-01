import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText= {(value) => (
                <>
                <p>
                    Subtotal  :  
                    <strong>300</strong>
                </p>
                <br/>
                <p>
                    Delivery :
                    <strong> 50 </strong>
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
    )
}

export default Subtotal
