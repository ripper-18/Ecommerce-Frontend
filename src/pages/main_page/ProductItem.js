import React, { Component } from 'react'
import './ProductItem.css'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getBookbyId} from '../../actions/book_actions'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

class ProductItem extends Component {
  componentDidMount(){
    //console.log(this.props)
  }
  state={
      click:false,
      click2:false
  }
  handleAddToCart = () => {
   
        this.props.addFunction({...this.props.data});
    
};
handleRemoveFromCart = () => {
   // console.log(this.props.data)
   let x=this.props.container.filter(
    (item) => item._id === this.props.data._id
).length
for(let i=0;i<x;i++){
    this.props.removeFunction(
        this.props.data,
    );
}
   
};
componentDidMount(){
    if(this.props.container.filter(
        (item) => item._id === this.props.data._id
    ).length<=0){
        this.setState({
            click:false
        })
    }
    else{
        this.setState({
            click:true
        })
    }
}
    render(){
    return (
        <div className="product-card2">
            <div className="upper-half">
                <img src={this.props.data.image[0]} alt="imag" onClick={async() => { await this.props.getBookbyId(this.props.data._id);await this.props.history.push(`/product/${this.props.data._id}`)}}/>
            </div>

<div className={this.state.click===true?"lower-half clicked":"lower-half"}>

<div className="left">
        <div className="details">
    <p onClick={async() => { await this.props.getBookbyId(this.props.data._id);await this.props.history.push(`/product/${this.props.data._id}`)}}>{this.props.data.name}<br/>
   </p>
   <span className="author">By- {this.props.data.author}</span>
    <span className="price">₹ {(this.props.data.price).toFixed(2)}</span>
        </div>
        <div className="buy"  onClick={()=>{this.setState({
            click:true
        });
        this.handleAddToCart()
        }} >
            <AddShoppingCartRoundedIcon  className="cart-ic"/>
        </div>
      </div>
      <div className="right">
        <div className="done"> <DoneRoundedIcon className="cart-ic"/> </div>
        <div className="details">
        <p onClick={async() => { await this.props.getBookbyId(this.props.data._id);await this.props.history.push(`/product/${this.props.data._id}`)}}>{this.props.data.name}<br/>
   </p>
    <span className="price">₹ {(this.props.data.price).toFixed(2)}</span>
        </div>
        <div className="remove" onClick={()=>{this.setState({
            click:false
        });
        this.handleRemoveFromCart()
        }}> <ClearRoundedIcon className="cart-ic"/> </div>
      </div>
</div>   
        </div>
    )}
}
const mapStateToProps = (state) => ({
    book: state.book.currentBook,
    cart: state.cart,
    auth:state.auth
});

export default connect(mapStateToProps,{getBookbyId})(withRouter(ProductItem))
