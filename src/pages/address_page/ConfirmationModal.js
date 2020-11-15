import React, { Component } from "react";
import { connect } from "react-redux";
import { removeAddress,getAddress } from "../../actions/order_actions";
import Modal from "react-bootstrap/Modal";

class ConfirmationModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.isCnfOpen}
                onHide={() => this.props.setCnfOpen(false,this.props.index)}
                centered
                size="sm"
                style={{
                    zIndex: "999999",
                    fontFamily: "Shentox",
                }}
            >
                <Modal.Body>
                    <h6>Are you sure you want to remove this address?</h6>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={() => {
                            this.props.removeAddress(
                                this.props.id,
                                this.props.auth.token
                            );
                            this.props.setCnfOpen(false,this.props.index);
                            this.props.getAddress(this.props.auth.token)

                        }}
                        className="btn btn-sm btn-outline-danger"
                    >
                        YES
                    </button>
                    <button
                        onClick={() => this.props.setCnfOpen(false,this.props.index)}
                        className="btn btn-sm btn-outline-default"
                    >
                        NO
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { removeAddress,getAddress })(ConfirmationModal);
