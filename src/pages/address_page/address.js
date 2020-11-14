import React, { Component } from "react";

import cx from "classnames";
import styles from "./Address.module.css";
import { connect } from "react-redux";
import { getAddress } from "../../actions/order_actions";

import { Link } from "react-router-dom";
import AddressModal from "./AddressModal";
import ConfirmationModal from "./ConfirmationModal";
import EditModal from "./EditModal";

class Address extends Component {
    state = {
        isOpen: false,
        isCnfOpen: [],
        isEditOpen: [],
        addr:"",
    };

    componentDidMount() {
        this.props.getAddress(this.props.auth.token);
        let address=[]
      this.props.addresses.map((addr,index)=>(
        address[index]=false
      ))
      console.log(address)
      this.setState({
          ...this.state,
          isCnfOpen:address,
          addr:address
      })
      console.log(this.state)
       window.scrollTo(0, 0)
      
    }
    
    // componentDidUpdate(prevProps) {
    //     this.props.getAddress(this.props.auth.token);
    // }

    setModalOpen = (value) => {
        this.setState({
            ...this.state,
            isOpen: value,
        });
    };
    setCnfOpen = (value,index) => {
        let address=this.state.isCnfOpen
        address[index]=value
        console.log(this.state)
        this.setState({
            ...this.state,
            isCnfOpen: address,
            
        });
        console.log(this.state)
        
    };
    setEditOpen = (value,index) => {
        let address2=this.state.isEditOpen
        address2[index]=value
        this.setState({
            ...this.state,
            isEditOpen: address2,
            
        });
        console.log("edit")
        console.log(this.state)
    };

    render() {
        // console.log(this.props.auth.token);
        
        return (
            <>
                <div className={styles.wrapper}>
                    <div className="col border-bottom p-0">
                        <div
                            className={cx(
                                styles.bread,
                                "m-auto breadcrumb container "
                            )}
                        >
                            <Link to="/account">Account</Link>
                        </div>
                    </div>
                    <div className={"container my-5"}>
                        <div className="d-md-flex mb-5 w-100 justify-content-between">
                            <h3 className="font-weight-bold">
                                Your Saved Addresses
                            </h3>
                           
                        </div>
                        <div className="row">
                          <div  className="col-md-4 " style={{marginBottom:"20px",height:"250px"}}>
                                        <div className="card h-100 " style={{borderWidth:4,borderStyle: 'dashed',borderRadius: 4,height:"1000px"}}>
                                            <div className="card-body ">
                                                <span className={styles.add} onClick={()=>this.setModalOpen(true)}>+</span>
                                                <span className={styles.add2}>Add Address</span>
                                             </div>
                                        </div>
                                    </div>
                            {this.props.addresses.length > 0 ? (
                                
                                this.props.addresses.map((addr,index) => (
                                    <div key={index} className="col-md-4"style={{marginBottom:"20px"}}>
                                        <div className="card h-100" >
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
                                                <button
                                                    onClick={() =>
                                                        this.setCnfOpen(true,index)
                                                    }
                                                    className="btn mt-3 btn-sm btn-outline-danger"
                                                >
                                                    Remove
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        this.setEditOpen(true,index)
                                                    }
                                                    className="btn mt-3 ml-3 btn-sm btn-outline-danger"
                                                >
                                                    Edit
                                                </button>
                                                <ConfirmationModal
                                                    isCnfOpen={
                                                        this.state.isCnfOpen[index]
                                                    }
                                                    setCnfOpen={this.setCnfOpen}
                                                    id={addr._id}
                                                    index={index}
                                                />
                                                <EditModal
                                                    isEditOpen={
                                                        this.state.isEditOpen[index]
                                                    }
                                                    setEditOpen={
                                                        this.setEditOpen
                                                    }
                                                    id={addr._id}
                                                    addr={addr}
                                                    index={index}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center my-5">
                                    <h5>No Addresses Found</h5>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <AddressModal
                    isOpen={this.state.isOpen}
                    setModalOpen={this.setModalOpen}
                />
                

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    addresses: state.order.addresses,
    auth: state.auth,
});

export default connect(mapStateToProps, { getAddress })(Address);
