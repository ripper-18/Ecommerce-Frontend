import React, { Component } from 'react'
import cx from "classnames";
import styles from "./Info.module.css";
import Modal from "react-bootstrap/Modal";

 class InfoModal extends Component {

    render() {
        return (
            <Modal
            show={this.props.infOpen}
            onHide={()=>this.props.setModalOpen(false,this.props.index)}
            centered
            size="lg"
            style={{
                zIndex: "999999",
                maxHeight: "90vh",
                fontFamily: "Shentox",
            }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Full Order Information:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={cx(styles.accordion, "py-4")}>
                    <div className="row  ">
                        <div className="col-sm-12">
                            <div className="row m-0">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}}>
                                  <span className="font-weight-bold mr-3 "> Your Order Subtotal (Without delivery+ GST charges): </span><span className="text">{this.props.data.billAmount}</span> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Final Payable/Paid Amount : </span><span className="text-right">{this.props.data.finalAmount}</span> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}}>
                                  <span className="font-weight-bold mr-4">Delivery Address : </span><span className="text-right">{this.props.data.address.address  + ","+ this.props.data.address.state  }</span> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Payment Status : </span><span className="text-right text-capitalize">{this.props.data.paymentMode==="cash"? this.props.data.cashPaymentStatus:this.props.data.onlinePaymentStatus}</span> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Order Id : </span><span className="text-right ">{this.props.data.orderId}</span> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Order Status : </span><span className="text-right text-capitalize ">{this.props.data.orderStatus}</span> 
                                 </h6> 
                                </div>
                            </div>
                            {(this.props.data.orderStatus==="confirmed")?
                            <div className="row m-2 ">
                            <div className="col-sm-12" >
                             <h6 style={{display:"flex",justifyContent:"space-between"}} >
                              <span className="font-weight-bold mr-4 ">Delivery Details : </span><div><span className="text-right text-capitalize "> Will be assigned shortly</span></div>
                             </h6> 
                            </div>
                        </div>
                            :<div></div>
                            }
                            {(this.props.data.orderStatus==="out_for_delivery")?
                            <div className="row m-2 ">
                            <div className="col-sm-12" >
                             <h6 style={{display:"flex",justifyContent:"space-between"}} >
                              <span className="font-weight-bold mr-4 ">Delivery Details : </span><div><span className="text-right text-capitalize ">Delivered By:  {this.props.data.assignDelivery.name}</span><br></br> <span className="text-right text-capitalize ">Phone No:  {this.props.data.assignDelivery.phone}</span> </div>
                             </h6> 
                            </div>
                        </div>
                        : <div></div>
    }
                             <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Books Ordered : </span><div style={{display:"flex",flexDirection:"column"}}>{this.props.data.books.map((book)=>(
                                      <span className="text-right ">{book.book.name } x  {book.quantity}</span>
                                  )) }</div> 
                                 </h6> 
                                </div>
                            </div>
                            <div className="row m-2 ">
                                <div className="col-sm-12" >
                                 <h6 style={{display:"flex",justifyContent:"space-between"}} >
                                  <span className="font-weight-bold mr-4 ">Ordered By : </span><div> <span className="text-right ">Name:  {this.props.data.userId.name }</span><br></br><span className="text-right ">Email-Id:  {this.props.data.userId.email }</span><br></br><span className="text-right ">Phone No:  {this.props.data.userId.phone }</span></div> 
                                 </h6> 
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default InfoModal
