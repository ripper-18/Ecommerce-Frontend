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
                    WELCOME TO DUbookX<br/>
If you want to sell your books and get good money for it, this is the perfect platform. These are our terms and conditions to become a seller-
<br/><br/>
1.	You will be contacted by DUbookX regarding the price/condition of the book.<br/>
2.	If your book is sold, it shall be picked up from your given location within 48 hours. During this time period you will be required to pack the book in a small box/bubble wrap/plastic package which should be sealed properly.<br/>
3.	You will be required to print out and stickthe shipping label which will be mailed to you by DUbookX. <br/>
4.	The book will be received by the buyer in 3-6 days (average). When the buyer confirms receiving it, you shall be wired the agreed upon amount by your preferred mode of payment.<br/>
5.	If due to some reason the customer returns the book, you shall get your book back and it will again become available for other buyers.<br/>
6.	If due to some reason the book you are selling becomes unavailable please inform DUbookX regarding the same.<br/>


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
                            <p>I hereby agree with all the above terms and Conditions and will follow the Code and Conduct of the Company </p>
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