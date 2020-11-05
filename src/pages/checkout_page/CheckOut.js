import React,{Component} from 'react'
import Subtotal from './Subtotal'
import OrderDetails from './OrderDetails'
import Item from './Item'
import './CheckOut.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getAddress,removeAddress,setCurrentOrder} from '../../actions/order_actions'

class CheckOut extends Component {

    state={
        delivery: 29,
        
        selectedAddress: "Dummy address for order check",
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
            names[num]=books[i].name
            
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {
                book: Object.keys(counts)[i],
                quantity: Object.values(counts)[i],
                name:names[Object.keys(counts)[i]]
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
            <p> ajkffokaf akfoafa f afiaof kafiaf afiaf afi </p> <button>Change address</button>
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
