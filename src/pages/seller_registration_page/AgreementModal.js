import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";

import cx from "classnames";
import styles from "./SellerReg.module.css";

class AgreementModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isAgree: false
    };

    IsAgreeHandler = async (e) => {

        await this.setState((prevState, props) => {
            return {
                isAgree: !prevState.isAgree,

            };
        });


    };

    IsAgreeHandlerr = () => {
        let t = this.state.isAgree;

        if (t) t = false;
        else t = true;




        this.setState({
            ...this.state,
            isAgree: t
        })
    }

    becomeSellerHandler = () => {

        if (this.state.isAgree) {
            this.props.SellerRegisterHandler();
        }
        else {
            alert('Please agree to the terms and conditions to proceed');
        }
    }
    render() {
        return (
            <Modal
                show={this.props.isOpen}
                onHide={() => this.props.CloseModal()}
                centered
                size="lg"
                style={{
                    zIndex: "999999",
                    maxHeight: "90vh",
                    fontFamily: "Shentox",
                }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Seller Agreement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                        <p>1. i agree with blah blah blah blah balh</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div className="row w-100">
                        <div className="col-sm-12">
                            <input
                                type="checkbox"
                                className="form-control"
                                required
                                onChange={this.IsAgreeHandler}
                            />
                            <p>I hereby agree with all the above terms and Conditions and will follow the COde and Conduct of the Company </p>
                            {this.state.isAgree}
                            <button

                                className={cx(
                                    styles.standardButton,
                                    "btn btn-lg w-100 mt-4 mb-sm-3"
                                )}
                                onClick={this.becomeSellerHandler}
                            >
                                Become a Seller
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AgreementModal;