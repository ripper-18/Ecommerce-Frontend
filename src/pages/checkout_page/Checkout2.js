import React, { Component } from 'react'
import styles from './Checkout2.module.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAddress, removeAddress, setCurrentOrder, addAddress } from '../../actions/order_actions'
import { showDialog } from '../../actions/dialog_actions'
import AddressModal from "../address_page/AddressModal";
import Stepper from '../common/stepper'
import cx from 'classnames'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import config from "../../config";

class Checkout extends Component {

    state = {
        delivery: 29,
        selectedAddress: "",
        selectedCartValue: [],
        fullAddress: "",
        rates: {},
        delivery_mode: 0
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            selectedCartValue: this.getCount(this.props.cart),
        });
        this.props.getAddress(this.props.auth.token);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };


        fetch(config.api + `delivery/rates`, requestOptions)
            .then((response) => response.json())
            .then((res) => {
                this.setState({
                    ...this.state,
                    rates: res
                })
            })
            .catch((err) => console.log(err));
    }
    getFinalDishArray = (books) => {
        let counts = {};
        let result = [];
        let names = [];
        for (let i = 0; i < books.length; i++) {
            let num = books[i]._id;
            names[num] = books[i]

            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {

                quantity: Object.values(counts)[i],
                book: names[Object.keys(counts)[i]]
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
    setSelectedAddress = async (e) => {

        await this.setState({
            ...this.state,
            selectedAddress: e,

        });
        for (let i = 0; i < this.props.order.addresses.length; i++) {
            if (this.props.order.addresses[i]._id === e) {
                const temp_state = this.props.order.addresses[i].state.toString();
               
                const delivery = this.state.rates ? this.state.rates.data[temp_state][1] : 30;
                this.setState({
                    ...this.state,
                    finalAddress: this.props.order.addresses[i],
                    delivery: delivery,
                    delivery_mode: this.state.rates ? this.state.rates.data[temp_state][0] : 0
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
                    +
                    this.getDeliveryPrice()).toFixed(2),
                //delivery
                this.state.delivery,
                //gst
                0)
           
            this.props.history.push("/order");
        } else {
            this.props.showDialog("Please select an address");
        }
    };

    getDeliveryPrice = () => {
        const num_books = this.props.cart.bookCart.length;

        if (this.state.delivery_mode === 1) {
            let shiv = 0;
            for (let i = 0; i < num_books; i++) {
                if (this.props.cart.bookCart[i].course === "Shivdas") shiv++;

            }
            const delivery_price = (num_books - shiv) * this.state.delivery + shiv * 35;
            return delivery_price;
        }
        else if (this.state.delivery_mode === 2) {
            let new_books = 0;
            let old_books = 0;
            let shiv_das = 0;

            for (let i = 0; i < num_books; i++) {
                if (this.props.cart.bookCart[i].course === "Shivdas") shiv_das++;
                if (this.props.cart.bookCart[i].hand === 1) new_books++;
                else old_books++;
            }

            const delivery_price = old_books * this.state.delivery + new_books * this.state.delivery - shiv_das * this.state.delivery -
                new_books * this.state.delivery * (new_books - 1) * 0.12 + shiv_das * 35;

            return delivery_price
        }
        return 50 * num_books;
    }

    render() {
        const subt = this.getSubTotal();
        const gst = (0.00 * subt);
        const final = (subt + gst + 30).toFixed(2);

        return (
            <>
                <Stepper number={1} />
                <div className={styles.wrapper}>



                    <h1 className="page-title font-weight-bold m-0  text-center p-0 d-none d-md-block ">
                        CHECKOUT
                                </h1>
                    <div className="container p-0 ">
                        <div className="row mt-5 w-100 mx-0 my-md-5 pb-md-5">
                            <div className="col-sm-12 col-md-4 px-0 px-md-3">
                                <div className="pb-5 px-3 p-md-4 mt-md-5">
                                    <h1 className="font-weight-bold mt-3 mb-0 text-left px-0 d-md-none">
                                        Checkout
                                </h1>
                                    <h2 className="font-weight-bold mt-3 mb-3 text-left px-0 d-none d-md-block text-capitalize">
                                        Order Summary
                                </h2>
                                    <hr className="m-0 d-md-none" />
                                    <div className="row my-3 d-md-none">
                                        <div className="col-12 d-flex justify-content-between">
                                            <span className="font-weight-bold text-uppercase">
                                                {this.props.cart.bookCart.length}{" "}
                                            Items
                                        </span>
                                            <span className="font-weight-bold text-danger">
                                                ₹{" "}
                                                {(this.getSubTotal()


                                                ).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="container pt-5 pb-3">
                                        <div className="row">
                                            <div className="col-6 font-weight-bold">
                                                <p>Subtotal</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p>
                                                    ₹{" "}
                                                    {this.getSubTotal().toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 font-weight-bold">
                                                <p>Estimated Delivery Charges</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p>
                                                    ₹{" "}
                                                    {!this.state.finalAddress ? 'Please Select a Delivery Address' : this.getDeliveryPrice().toFixed(2)}

                                                </p>
                                            </div>
                                        </div>


                                        <hr />
                                        <div className="row">
                                            <div className="col-6 font-weight-bold">
                                                <p>Estimated Total</p>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className={styles.total}>
                                                    ₹{" "}
                                                    {!this.state.finalAddress ? 'Select A delivery Address' : (this.getSubTotal() + this.getDeliveryPrice()).toFixed(2)}

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8 px-0 px-md-3">
                                <div className=" px-3 p-md-4">

                                    <div>
                                        <div>
                                            <h2 className="font-weight-bold mt-3 mb-3 text-left px-0  d-md-block text-capitalize">
                                                Delivery Information
                                        </h2>
                                        </div>
                                        <div className={styles.accordion}>
                                            <Accordion
                                                defaultActiveKey="0"
                                                className={styles.checkoutAccordion}
                                            >
                                                <Card
                                                    className={styles.checkoutCard}
                                                >
                                                    <Card.Header
                                                        className={
                                                            styles.checkoutHeader
                                                        }
                                                    >
                                                    </Card.Header>
                                                    <Accordion.Collapse eventKey="0">
                                                        <Card.Body
                                                            style={{

                                                            }}
                                                        >
                                                            <div className={styles.add_card_container}>

                                                                {this.props.order.addresses.length > 0 ? (
                                                                    this.props.order.addresses.map((addr, index) => (
                                                                        <div key={index} className="col-md-6" >
                                                                            <label className="row">

                                                                                <div className="card h-200 col-11" style={{ height: "auto", minHeight: "250px", display: "inline", cursor: "pointer", border: this.state.selectedAddress === addr._id ? `2px solid #273c75` : `` }}

                                                                                    onClick={() =>
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

                                                                    style={{ display: "none", marginRight: "10%" }}

                                                                />
                                                                <div className={cx(styles.add_addr_box, "card")} style={{ padding: "0 8%", minHeight: "250px", borderWidth: 4, borderStyle: 'dashed', borderRadius: 4 }}>
                                                                    <div className="card-body" onClick={() => this.setModalOpen(true)} >
                                                                        <div className='card-inside-div'>
                                                                            <div className={styles.add1} style={{ textAlign: "center" }} >+</div>
                                                                            <br></br>
                                                                            <div className={styles.add2} >Add Address</div>
                                                                        </div>

                                                                    </div>
                                                                    {" "}
                                                                </div>
                                                                <AddressModal
                                                                    isOpen={this.state.isOpen}
                                                                    setModalOpen={this.setModalOpen}

                                                                />
                                                            </div>
                                                        </Card.Body>
                                                    </Accordion.Collapse>
                                                </Card>
                                            </Accordion>
                                        </div>
                                        <hr />
                                        <div className={cx("row ", styles.f)}>
                                            <div className="col-sm-12">


                                                <button
                                                    className={cx(
                                                        styles.toBilling,
                                                        "btn btn-lg w-100 mt-4 mb-sm-3"
                                                    )}
                                                    onClick={
                                                        this
                                                            .handlePlaceDirectOrder
                                                    }
                                                    disabled={this.state.selectedAddress.length > 0 ? false : true}
                                                >
                                                    Place order now
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.bigBtn}>
                    <div className={'col-6'}>
                        <button
                            className={cx(
                                styles.btnBig2,

                            )}
                            onClick={
                                this
                                    .handlePlaceDirectOrder
                            }
                            disabled={this.state.selectedAddress.length > 0 ? false : true}
                        >
                            Place order now
                                                </button>
                    </div>
                </div>
            </>
        );
    }
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
})(withRouter(Checkout));
