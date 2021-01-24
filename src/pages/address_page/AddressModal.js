import React, { Component } from "react";
import { connect } from "react-redux";
import { addAddress, getAddress } from "../../actions/order_actions";
import cx from "classnames";
import styles from "./Address.module.css";
import Modal from "react-bootstrap/Modal";
import Select from 'react-select'

class AddressModal extends Component {
    state = {
        delivery1: "",
        city: "",
        pincode: "",
        state: "",
        phone: "",
        country: "india",
        region: ''
    };

    handleAddress = () => {
        this.props.addAddress(this.state, this.props.auth.token);
        this.props.setModalOpen(false);
        this.props.getAddress(this.props.auth.token);
    };
    selectCountry(val) {
        this.setState({ country: val });
    }
    selectRegion(val) {
        this.setState({ region: val });
    }
    render() {
        const options = [
            { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
            { value: 'Assam', label: 'Assam' },
            { value: 'Bihar', label: 'Bihar' },
            { value: 'Chhattisgarh', label: 'Chhattisgarh' },
            { value: 'Chandigarh', label: 'Chandigarh' },
            { value: 'Delhi', label: 'Delhi' },
            { value: 'Goa', label: 'Goa' },
            { value: 'Gujarat', label: 'Gujarat' },
            { value: 'Haryana', label: 'Haryana' },
            { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
            { value: 'Jammu and Kahmir', label: 'Jammu and Kahmir' },
            { value: 'Jharkhand', label: 'Jharkhand' },
            { value: 'Karnataka', label: 'Karnataka' },
            { value: 'Kerala', label: 'Kerala' },
            { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
            { value: 'Maharashtra', label: 'Maharashtra' },
            { value: 'Manipur', label: 'Manipur' },
            { value: 'Meghalaya', label: 'Meghalaya' },
            { value: 'Mizoram', label: 'Mizoram' },
            { value: 'Nagaland', label: 'Nagaland' },
            { value: 'Odisha', label: 'Odisha' },
            { value: 'Pudducherry', label: 'Pudducherry' },
            { value: 'Punjab', label: 'Punjab' },
            { value: 'Rajasthan', label: 'Rajasthan' },
            { value: 'Sikkim', label: 'Sikkim' },
            { value: 'Tamil Nadu', label: 'Tamil Nadu' },
            { value: 'Telangana', label: 'Telangana' },
            { value: 'Tripura', label: 'Tripura' },
            { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
            { value: 'Uttarakhand', label: 'Uttarakhand' },
            { value: 'West Bengal', label: 'West Bengal' }
        ]

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

                            <div className="col-sm-12" style={{ padding: "20px" }} >

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
                                        {/* <div className="form-group pb-3"> */}
                                        <label>State</label>

                                        <Select
                                            required

                                            placeholder="Select state"
                                            theme={(theme) => ({
                                                ...theme,
                                                borderRadius: 0,
                                                colors: {
                                                    ...theme.colors,
                                                    primary25: "#f5f5f5",
                                                    primary50: "#f5f5f5",
                                                    primary: "#273c75",
                                                },
                                            })}
                                            onChange={(e) =>
                                                this.setState({
                                                    ...this.state,
                                                    state: e.value,
                                                })
                                            }
                                            options={options}
                                        />


                                        {/* </div> */}
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group pb-1">
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

export default connect(mapStateToProps, { addAddress, getAddress })(AddressModal);
