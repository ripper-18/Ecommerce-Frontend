import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'
import {Form} from 'react-bootstrap';

function Subtotal() {
    return (
        <div className="subtotal">
           <div>
               <h2>Select Payment Option: </h2>
               <br/>
               <Form>
            
                        <div key={`default-radio`} className="mb-3">
                        <Form.Check 
                            type='radio'
                            id={`default-radio`}
                            label={`Payment option 1`}
                        />
                        <br/>
                        <Form.Check 
                            type='radio'
                            id={`default-radio`}
                            label={`Payment option 2`}
                        />
                        <br/>
                        <Form.Check 
                            type='radio'
                            id={`default-radio`}
                            label={`Payment option 3`}
                        />
                        
                        </div>
                    
                </Form>
           </div>
            
            <button>Confirm</button>
        </div>
    )
}

export default Subtotal
