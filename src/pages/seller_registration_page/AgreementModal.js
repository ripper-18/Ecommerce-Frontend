import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

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

    // IsAgreeHandlerr = () => {
    //     let t = this.state.isAgree;

    //     if (t) t = false;
    //     else t = true;




    //     this.setState({
    //         ...this.state,
    //         isAgree: t
    //     })
    // }

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
                    You have a wide variety of books to choose from so please order carefully. After placing your order please review your order
                    details and contact us immediately at +91 99538 97446 if a mistake has been made or if you want to cancel your order. 
                    <br/>
                    We do not give refunds if you simply change your mind, but we may be able to correct any errors in the order process prior to shipment.
                    <br/>
                    If the book you receive is different to what you purchased online, is damaged, or is otherwise not as expected, please contact us immediately on our phone number (+91 99538 97446) or email us at: dubookx@gmail.com to discuss further options. 
                    <br/>See our <Link to="/terms"> Terms of use </Link> for more information.


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