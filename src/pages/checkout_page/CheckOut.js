import React,{Component} from 'react'
import './CheckOut.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAddress,removeAddress,setCurrentOrder,addAddress} from '../../actions/order_actions'
import {showDialog} from '../../actions/dialog_actions'
import AddressModal from "../address_page/AddressModal";
import Stepper from '../common/stepper'


class CheckOut extends Component {

    state={
        delivery: 29,
        selectedAddress: "",
        selectedCartValue: [],
        fullAddress:""
       }

    componentDidMount(){
        this.setState({
            ...this.state,
            selectedCartValue: this.getCount(this.props.cart),
        });
        this.props.getAddress(this.props.auth.token);
    }
    getFinalDishArray = (books) => {
        let counts = {};
        let result = [];
        let names=[];
        for (let i = 0; i < books.length; i++) {
            let num = books[i]._id;
            names[num]=books[i]
            
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {
                
                quantity: Object.values(counts)[i],
                book:names[Object.keys(counts)[i]]
            };
        }
        return result;
    };
    getCount = (cart) => {
        let result = [];
        if (cart.bookCart.length > 0) {
            result.push(...this.getFinalDishArray(cart.bookCart));
        }
        return result;
    };
    getSubTotal = () => {
        return (
            this.props.cart.bookCart.reduce((a, b) => a + b.price, 0)
        );
    };
    setSelectedAddress = async(e) => {
        await this.setState({
            ...this.state,
            selectedAddress: e,
           
        });
        for(let i=0;i<this.props.order.addresses.length;i++){
            if(this.props.order.addresses[i]._id===e){
                this.setState({
                    ...this.state,
                    finalAddress:this.props.order.addresses[i]
                })
                break;
            }
        }
    };
    setModalOpen = (value) => {
        this.setState({
            ...this.state,
            isOpen: value,
        });
    };
    setCnfOpen = (value) => {
        this.setState({
            ...this.state,
            isCnfOpen: value,
        });
    };
    setEditOpen = (value) => {
        this.setState({
            ...this.state,
            isEditOpen: value,
        });
    };
    handlePlaceDirectOrder = () => {
        if (this.state.selectedAddress.length > 0) {
            this.props.setCurrentOrder(
                // address
                this.state.selectedAddress,
                this.state.finalAddress,
                // originalBill
                this.getSubTotal().toFixed(2),
                //books
                this.state.selectedCartValue,
                //finalAmount
                (this.getSubTotal() +
                    this.getSubTotal() * 0.05 +
                    this.state.delivery).toFixed(2),
                //delivery
                this.state.delivery,
                //gst
             5)
         //  console.log(this.props)
            this.props.history.push("/order");
        } else {
            this.props.showDialog("Please select an address");
        }
    };

           
    render(){
        const subt = this.getSubTotal();
        const gst = 0.05*subt;
        const final = (subt + gst + 30);
        
    return (
        <>
       <Stepper number={1}/>
        <div id='checkout-container'>
            <div  id='subtotal-box'>

                <p>Order Summary!</p>

                <span className='lefty'>Subtotal</span>
                <span className='righty'>₹{subt}</span><br></br>
                <span className='lefty'>Delivery</span>
                <span className='righty'>₹30</span><br></br>
                <span className='lefty'>Gst(5%)</span>
                <span className='righty'>₹{gst}</span><br></br>
                <span className='lefty total-amount'>Total</span>
                <span className='righty total-amount'>₹{final}</span><br></br>
            </div>

            <div  id='address-box'>
                <p>Delivery Information</p>

                <span> Select Delivery Address: </span>
                <div id='add-card-container'>
                  
                 {this.props.order.addresses.length > 0 ? (
                    this.props.order.addresses.map((addr, index) => (
                        <div key={index} className="col-md-6" >
                            <label className="row">
                                {/*<div className="col-2">
                                    <input
                                        type="radio"
                                        name="address"
                                        value={
                                            addr._id
                                        }
                                        onChange={
                                            this
                                                .setSelectedAddress
                                        }
                                        style={{marginRight:"10%" }}
                                    />
                                    </div>*/}
                                <div className="card h-200 col-11" style={{ height: "auto",minHeight:"250px", display:"inline",cursor:"pointer",border:this.state.selectedAddress===addr._id?`2px solid #273c75`:`` }}
                                
                                onClick={()=>
                                    this
                                        .setSelectedAddress(addr._id)
                                }
                                >
                                    <div className="card-body">
                                        <div>
                                            <span className="font-weight-bold">
                                                Address:{" "}
                                            </span>
                                            <span>{addr.address}</span>
                                        </div>
                                        <div>
                                            <span className="font-weight-bold">
                                                City:{" "}
                                            </span>
                                            <span>
                                                {addr.city || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-weight-bold">
                                                State:{" "}
                                            </span>
                                            <span>
                                                {addr.state || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="font-weight-bold">
                                                Phone:{" "}
                                            </span>
                                            <span>
                                                {addr.phone || "N/A"}
                                            </span>
                                        </div>
                                      
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))
                ) : (
                        <div className="ml-4">
                            <p>
                                No saved
                                addresses
                            </p>
                        </div>
                    )} 
                    <input
                        type="radio"
                       
                        style={{display:"none", marginRight:"10%"}}
                        
                    />
                    <div className="card" id="add-addr-box" style={{ padding:"0 8%",minHeight: "250px", borderWidth: 4, borderStyle: 'dashed', borderRadius: 4}}>
                            <div className="card-body" onClick={() => this.setModalOpen(true)} >
                            <div className='card-inside-div'>
                                    <div className="add1" style={{ textAlign: "center" }} >+</div>
                                    <br></br>
                                    <div className="add2" >Add Address</div>
                            </div>
                            
                        </div>
                        {" "}
                    </div>
                    </div>
                <AddressModal
                    isOpen={this.state.isOpen}
                    setModalOpen={this.setModalOpen}
                />
                <button className="place-order-button" onClick={this
                    .handlePlaceDirectOrder} >Place Order</button>
            </div>
        </div>
        </>
    )}
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth,
    order: state.order,
});
export default connect(mapStateToProps, {
    getAddress,
    removeAddress,
    setCurrentOrder,
   showDialog
})(withRouter(CheckOut));
