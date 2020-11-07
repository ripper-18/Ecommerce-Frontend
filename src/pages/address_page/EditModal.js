import React, { Component } from "react";
import { connect } from "react-redux";
import { editAddress,getAddress } from "../../actions/order_actions";

import cx from "classnames";
import styles from "./Address.module.css";
import Modal from "react-bootstrap/Modal";

class EditModal extends Component {
    state = {
        city:this.props.addr.city || "",
        state: this.props.addr.state || "",
        address: this.props.addr.address || "",
        phone: this.props.addr.phone || "",
       pincode:this.props.addr.pincode || ""
    };

    handleUpdate = () => {
        this.props.editAddress(
            this.props.id,
            this.state,
            this.props.auth.token
        );
        this.props.setEditOpen(false,this.props.index);
        this.props.getAddress(this.props.auth.token)
    };

    

    

    render() {
        return (
            <Modal
            show={this.props.isEditOpen}
                onHide={() => this.props.setEditOpen(false,this.props.index)}
                centered
                size="lg"
                style={{
                    zIndex: "999999",
                    maxHeight: "90vh",
                    fontFamily: "Shentox",
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx(styles.accordion, "py-4")}>
                        <div className="row">
                        
                        <div className="col-sm-12" style={{padding:"20px"}} >
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group pb-3">
                                    <label>Delivery Address </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your address"
                                        value={this.state.address}
                                        required
                                        onChange={(e) =>
                                            this.setState({
                                                ...this.state,
                                                address: e.target.value,
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
                                                picode: e.target.value,
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
                                    styles.toBilling,
                                    "btn btn-lg w-100 mt-4 mb-sm-3"
                                )}
                                onClick={this.handleUpdate}
                            >
                                Update address
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

export default connect(mapStateToProps, { editAddress,getAddress })(EditModal);
