import React,{Component} from 'react'

import './CheckOut.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAddress,removeAddress,setCurrentOrder,addAddress} from '../../actions/order_actions'
import {showDialog} from '../../actions/dialog_actions'
import ConfirmationModal from "../address_page/ConfirmationModal";
import EditModal from "../address_page/EditModal";
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
        //console.log(this.props)
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
        console.log(result)
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
       
        //   console.log(this.props.cart)
        return (
            this.props.cart.bookCart.reduce((a, b) => a + b.price, 0)
        );
    };
    setSelectedAddress = async(e) => {
        console.log(e.target.value)
        await this.setState({
            ...this.state,
            selectedAddress: e.target.value,
           
        });
        console.log(this.state.selectedAddress)
        for(let i=0;i<this.props.order.addresses.length;i++){
            if(this.props.order.addresses[i]._id===e.target.value){
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
        //console.log(this.props.coupon.appliedDiscount)
      
        console.log(this.state.selectedAddress)
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
           console.log(this.props)
            this.props.history.push("/order");
        } else {
            this.props.showDialog("Please select an address");
        }
    };
    componentDidUpdate(){
      //  window.location.reload()
    }
            
           
    render(){
        const subt = this.getSubTotal();
        const gst = 0.05*subt;
        const final = (subt + gst + 30);
        
    return (
        <>
       <Stepper number={1}/>
        <div id='checkout-container'>
            
            <div className='col-3' id='subtotal-box'>
                {/* <Subtotal
                    subtotal={this.getSubTotal()}
                    delivery={this.state.delivery}
                    gst={5} /> */}
                <p>Order Summary!</p>

                <span className='lefty'>Subtotal</span>
                <span className='righty'>₹{subt}</span><br></br>
                <span className='lefty'>Delivery</span>
                <span className='righty'>₹30</span><br></br>
                <span className='lefty'>Gst(5%)</span>
                <span className='righty'>₹{gst}</span><br></br>
                <span className='lefty'>Discount</span>
                <span className='righty'>₹0</span><br></br>
                
                
                
                <span className='lefty total-amount'>Total</span>
                <span className='righty total-amount'>₹{final}</span><br></br>
                
            


            </div>

            <div className='col-8' id='address-box'>
                <p>Delivery Information</p>

                {/* {this.props.order.addresses.length > 0 ?
                 (this.props.order.addresses.map((addr,index) => {(<addressCard addr={addr} key={index}></addressCard>)} ))
                 :(<p>Empty </p>)} */}

                <div id='add-card-container'>
                 {this.props.order.addresses.length > 0 ? (
                    this.props.order.addresses.map((addr, index) => (
                        <div key={index} className="col-md-6" >
                            <label className="row">
                                <div className="col-2">
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
                                </div>
                                <div className="card h-200 col-10" style={{ height: "350px", display:"inline" }}>
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
                                        {/* <div>
                                            <span className="font-weight-bold">
                                                Floor:{" "}
                                            </span>
                                            <span>
                                                {addr.floor || "N/A"}
                                            </span>
                                        </div> */}
                                        {/* <div>
                                            <span className="font-weight-bold">
                                                Landmark:{" "}
                                            </span>
                                            <span>
                                                {addr.landmark || "N/A"}
                                            </span>
                                        </div> */}
                                        <div>
                                            <span className="font-weight-bold">
                                                Phone:{" "}
                                            </span>
                                            <span>
                                                {addr.phone || "N/A"}
                                            </span>
                                        </div>
                                        <button
                                            onClick={() =>
                                                this.setCnfOpen(true)
                                            }
                                            className="btn mt-3 btn-sm btn-outline-danger"
                                        >
                                            Remove
                                                </button>
                                        <button
                                            onClick={() =>
                                                this.setEditOpen(true)
                                            }
                                            className="btn mt-3 ml-3 btn-sm btn-outline-default"
                                        >
                                            Edit
                                                </button>
                                        <ConfirmationModal
                                            isCnfOpen={
                                                this.state.isCnfOpen
                                            }
                                            setCnfOpen={this.setCnfOpen}
                                            id={addr._id}
                                        />
                                        <EditModal
                                            isEditOpen={
                                                this.state.isEditOpen
                                            }
                                            setEditOpen={
                                                this.setEditOpen
                                            }
                                            id={addr._id}
                                            addr={addr}
                                        />
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
                    <div className="card" style={{ padding:"0 10%",height: "350px", borderWidth: 4, borderStyle: 'dashed', borderRadius: 4,margin:"0 0 0 8%" }}>
                        <div className="card-body">
                            <span className="add1" onClick={() => this.setModalOpen(true)}>+</span>
                            <br></br>
                            <span className="add2" onClick={() => this.setModalOpen(true)}>Add Address</span>
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
