import React, { Component } from 'react'
import styles from './Cart2.module.css'
import {connect} from 'react-redux'
import {withRouter,Link} from 'react-router-dom'
import {addToCart,removeFromCart,clearCart} from '../../actions/cart_actions'
import cx from 'classnames'
import Stepper from '../common/stepper'
import {showDialog } from '../../actions/dialog_actions'




class Cart  extends Component  { 
    state={
        size:'',
    }

    getCount = (cart) => {
        let counts = {};
        let result = [];
        for (let i = 0; i < cart.length; i++) {
            let index = cart[i]._id;
            counts[index] = counts[index] ? counts[index] + 1 : 1;
        }
     
        for (let i = 0; i < Object.keys(counts).length; i++) {
            result[i] = {
                book: cart.find((o) => o._id === Object.keys(counts)[i]),
                quantity: Object.values(counts)[i],
            };
        }
        return result;
    };

    getSubTotal = () => {
       
        return (
            this.props.cart.bookCart.reduce((a, b) => a + b.price, 0)
        );
    };
    handleFullRemove=(elem)=>{
        let x=this.props.cart.bookCart.filter((item)=>item._id===elem._id).length

        for(let i=0;i<x;i++){
            this.props.removeFromCart(elem)
        }
    }
    handleRemove=(elem)=>{
        this.props.removeFromCart(elem)
    }
    handleAdd=(elem)=>{
        let x=this.props.cart.bookCart.filter((item)=>item._id===elem._id).length
        if(x===elem.countInStock-1){
            this.props.showDialog('Sorry! Maximum Count In Stock Reached')
            return
        }
        this.props.addToCart(elem)
    }
    updateDimensions = () => {
        if(window.innerWidth<640){
            this.setState({
              ...this.state,
              size:'col-6'
            })
        }
        else{
          this.setState({
              ...this.state,
              size:'col-12'
            })  
      }
        };
        componentDidMount() {
          if(window.innerWidth<640){
              this.setState({
                ...this.state,
                size:'col-6'
              })
          }
          else{
            this.setState({
                ...this.state,
                size:'col-12'
              })  
          }
          window.addEventListener('resize', this.updateDimensions);
        }
    
    render(){
       
    return (
        <>
        <div style={{backgroundColor:"white"}}>
           <Stepper number={0}/>
             <hr/>
           
            <div className={styles.checkout_wrapper}>
                <div className={styles.header}>
                    <div className={cx(styles.h1,'col-sm-12')}>Cart</div>
    <div className={cx(styles.h1c,'col-sm-12')}>{this.props.cart.bookCart.length} {"Items"} {"|"} 
           <span className={styles.h1cs}>
              {"₹"} {this.getSubTotal().toFixed(2)}
           </span>
        </div>
                 </div>
                 <div className={styles.content}>

                     <div className={cx(styles.cmain,'col-sm-12 col-lg-8')}>
                     <h4 className={styles.dh}>Cart</h4>
                         <div className={cx(styles.cmmain,'row')}>
                             {this.getCount(this.props.cart.bookCart)
                                    .sort((a, b) =>
                                        a.book.name < b.book.name ? -1 : 1
                                    )
                                    .map((item, index) => (
                                        <div className={styles.citem}>
                                            <div className={styles.cmitem}>
                                                <figure className={styles.itimg}>
                                                    <Link>
                                                    <img src={item.book.image[0] } alt={item.book.name}  className={styles.img}/>
                                                    </Link>
                                                   
                                                </figure>

                                                <div className={styles.itc}>
                                                    <div className="row">
                                                        <div className={cx(styles.left,"col-8")}>
                                                            <Link>
                                                            <p className={styles.lname}>
                                                                {item.book.name}
                                                            </p>
                                                            </Link>
                                                            <div className={styles.ldes}>
                                                                {item.book.author}
                                                            </div>
                                                            <div className={styles.syq}>
                                                                <div className={styles.lsyq} style={{paddingLeft:"0px"}}>
                                                                    {item.book.year===2?'2nd Year':''}  {item.book.year===1?'1st Year':''}  {item.book.year===3?'3rd Year':''}  {item.book.year===4?'4th Year':''} {","} {item.book.course}
                                                                </div>
                                                                <div className={styles.lsyq}>
                                                                   <div className={'row'}>
                                                                       <div className={this.state.size} style={{display:'flex',justifyContent:"space-around"}}>
                                                                           Qty: {this.props.cart.bookCart.filter((it)=>it._id===item.book._id).length}
                                                                       </div>
                                                                       <div className={this.state.size} style={{display:'flex',justifyContent:"space-around"}}>
                                                                         <span className={styles.qit} onClick={()=>this.handleRemove(item.book)} style={{visibility:item.quantity===1?'hidden':'inherit'}}>{"-"}</span>
                                                                         <span className={styles.qit} onClick={()=>this.handleAdd(item.book)}>{"+"}</span>
                                                                       </div>
                                                                   </div>
                                                                  
                                                                       
                                                                       
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx(styles.right,"col-4")}>
                                                            <span className={styles.rprice}>
                                                                {"₹"} {item.book.price*item.quantity}
                                                            </span>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                                <div className={cx(styles.remove,'col-sm-12')}>
                                                        <ul>
                                                            <li>
                                                                <button onClick={()=>this.handleFullRemove(item.book)}>
                                                                    Remove
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                    ))}
                         </div>
                     </div>
                     <div className={cx(styles.ctot,'col-sm-12 col-lg-3')}>
                         <aside className={styles.asi}>
                             <div className={cx(styles.summ,'row')}>
                                 <div className={"col-sm-12"}>
                                     <h4 className={cx(styles.sumc)}>
                                         Summary
                                     </h4>
                                 </div>
                             </div>
                             <div className={cx(styles.subt,'row')}>
                                 <div className={cx(styles.subtl,'col-8')}>
                                     {"Subtotal"}
                                 </div>
                                 <div className={cx(styles.subtr,'col-4')}>
                                     <div className={styles.subtrd}>
                                         <span>
                                            ₹ {this.getSubTotal().toFixed(2)}
                                         </span>
                                     </div>
                                 </div>
                             </div>
                             <div className={cx(styles.subt,'row')}>
                                 <div className={cx(styles.subtl,'col-8')}>
                                     {"Estimated Delivery Charges"}
                                 </div>
                                 <div className={cx(styles.subtr,'col-4')}>
                                     <div className={styles.subtrd}>
                                         <span>
                                            ₹ {30}
                                         </span>
                                     </div>
                                 </div>
                             </div>
                             <hr className={styles.hr}/>
                             <div className={cx(styles.subt,"row")}>
                                 <div className={'col-6'}>
                                     <p className={styles.totalp}>
                                         {"Total"}
                                     </p>
                                 </div>
                                 <div className="col-6">
                                     <p className={styles.pr}>
                                    <span>
                                    ₹ {(this.getSubTotal() +
                                            this.getSubTotal() * 0.05 +
                                            30).toFixed(2)} 
                                        </span> 
                                     </p>
                                 </div>
                             </div>
                             <hr className={styles.hr2}/>
                             <div className={styles.check}>
                                 <div className="col-sm-12" style={{paddingLeft:"16px", paddingRight:"16px"}}>
                                     
                                     {this.props.auth.token?(
  <button className={styles.checkbtn} disabled={!this.getSubTotal()} onClick={()=>this.props.history.push('/checkout')}>Proceed to Checkout</button>
            ):(
                 <button className={styles.checkbtn} onClick={()=>this.props.history.push('/login')}>Please sign in to Continue</button>
            )}
            <button className={styles.checkbtn2} disabled={!this.getSubTotal()} onClick={this.props.clearCart}>Clear Cart</button>
                                 </div>
                             </div>
                         </aside>
                     </div>
                 </div>
         </div>
        </div>
        <div className={styles.Bigbtn}>
            <div className={'col-6'}>
            {this.props.auth.token?(
  <button className={styles.btnBig} disabled={!this.getSubTotal()} onClick={()=>this.props.history.push('/checkout')}>Proceed to Checkout</button>
            ):(
                 <button className={styles.btnBig} onClick={()=>this.props.history.push('/login')}>Please sign in to Continue</button>
            )}
            </div>
            <div className={'col-6'}>
            <button className={styles.checkbtn2} disabled={!this.getSubTotal()} onClick={this.props.clearCart}>Clear Cart</button>
            </div>
        </div>
        </>
    )}
}
const mapStateToProps = (state) => ({
    cart: state.cart,
    auth: state.auth,
   
});

export default connect(mapStateToProps, {
    addToCart,
    removeFromCart,
    clearCart,
    showDialog
})(withRouter(Cart));

