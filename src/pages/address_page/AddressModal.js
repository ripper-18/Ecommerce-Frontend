import React, { Component } from "react";
import { connect } from "react-redux";
import { addAddress,getAddress } from "../../actions/order_actions";
import cx from "classnames";
import styles from "./Address.module.css";
import Modal from "react-bootstrap/Modal";


class AddressModal extends Component {
    state = {
        
        delivery1: "",
     
        city: "",
        pincode: "",
        state: "",
        phone: "",
        
    };

    handleAddress = () => {
        console.log(this.state)
        this.props.addAddress(this.state, this.props.auth.token);
        this.props.setModalOpen(false);
        this.props.getAddress(this.props.auth.token);
    };

       componentDidMount(){
        
       }
    

    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={() => this.props.setModalOpen(false)}
                centered
                size="lg"
                style={{
                    zIndex: "999999",
                    maxHeight: "90vh",
                    fontFamily: "Shentox",
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx(styles.accordion, "py-4")}>
                        <div className="row">
                        
                        <div className="col-sm-12" style={{padding:"20px"}} >
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group pb-3">
                                    <label>Delivery Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your address"
                                        value={this.state.delivery1}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                delivery1: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group pb-3">
                                    <label>City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your city"
                                        value={this.state.city}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                city: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group pb-3">
                                    <label>Postcode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter a postcode"
                                        value={this.state.pincode}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                pincode: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group pb-3">
                                    <label>State</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your state"
                                        value={this.state.state}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                state: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group pb-3">
                                    <label>Phone number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        value={this.state.phone}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <hr />
                        
                        
                        </div>
                        </div>
                    
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row w-100">
                        <div className="col-sm-12">
                            <button
                                
                                className={cx(
                                    styles.standardButton,
                                    "btn btn-lg w-100 mt-4 mb-sm-3"
                                )}
                                onClick={this.handleAddress}
                            >
                                Add address
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { addAddress,getAddress })(AddressModal);
