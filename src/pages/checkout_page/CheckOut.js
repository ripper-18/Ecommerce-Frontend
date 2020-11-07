import React,{Component} from 'react'
import Subtotal from './Subtotal'
import OrderDetails from './OrderDetails'
import Item from './Item'
import './CheckOut.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAddress,removeAddress,setCurrentOrder,addAddress} from '../../actions/order_actions'

import ConfirmationModal from "../address_page/ConfirmationModal";
import EditModal from "../address_page/EditModal";
import AddressModal from "../address_page/AddressModal";

class CheckOut extends Component {

    state={
        delivery: 29,
        selectedAddress: "",
        selectedCartValue: [],
       
    }

    componentDidMount(){
        //console.log(this.props)
        this.setState({
            ...this.state,
            selectedCartValue: this.getCount(this.props.cart),
        });
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
    setSelectedAddress = (e) => {
        this.setState({
            ...this.state,
            selectedAddress: e.target.value,
        });
    };
    handlePlaceDirectOrder = () => {
        //console.log(this.props.coupon.appliedDiscount)
      
        
        if (this.state.selectedAddress.length > 0) {
            this.props.setCurrentOrder(
                // address
                this.state.selectedAddress,
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
            
           
    render(){
    return (
        <div>
            <h1>Checkout Page</h1>

            {this.state.selectedCartValue.map((book)=>(
                <Item
                data={book}></Item>
            ))}
            

            <Subtotal
            subtotal={this.getSubTotal()}
            delivery={this.state.delivery}
            gst={5} />

            <h3> Address: </h3>
            <div className={"container my-5"} style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                                                        
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
                                                                                            />
                                                                                        </div>
                                        <div className="card h-200 col-10" style={{height:"300px"}}>
                                            <div className="card-body">
                                                <div>
                                                    <span className="font-weight-bold">
                                                        Address:{" "}
                                                    </span>
                                                    <span>{addr.address}</span>
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
                                                        Floor:{" "}
                                                    </span>
                                                    <span>
                                                        {addr.floor || "N/A"}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-weight-bold">
                                                        Landmark:{" "}
                                                    </span>
                                                    <span>
                                                        {addr.landmark || "N/A"}
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
                            <div className="col-md-6">
                                <label className="row">
                                <div className="col-2">
                                                                  
                                                                                        </div>
                                                                                        <div className="card col-10" style={{height:"300px",borderWidth:4,borderStyle: 'dashed',borderRadius: 4}}>
                                            <div className="card-body">
                                            <span className="add" onClick={()=>this.setModalOpen(true)}>+</span>
                                                <span className="add2">Add Address</span>
                                            </div>
                                            {" "} 
                                        </div>
                                </label>
                            </div>
                                                        </div>
                                                        <AddressModal
                    isOpen={this.state.isOpen}
                    setModalOpen={this.setModalOpen}
                />
            <button className="checkout-button" onClick={ this
                                                            .handlePlaceDirectOrder}>Pay</button>
        </div>
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
   
})(withRouter(CheckOut));
