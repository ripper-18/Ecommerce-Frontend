import React, { Component } from 'react'
import styles from './ProductItem.module.css'
import cx from 'classnames'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getBookbyId,getBooksByKeyword2} from '../../actions/book_actions'
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import  LazyLoad  from 'react-lazyload';


class ProductItem extends Component {
  state={
      click:false,
      click2:false,
      filters:{
        year:[],
        hand:[],
        course:[]
    }
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
    
    if(this.props.container.filter( (item) => item._id === this.props.data._id).length<=0){
        this.setState({
            click:false
        })
    }
    else{
        this.setState({
            click:true
        })
      //  console.log(this.props.data.name)
    }
}
componentDidUpdate(prevProps){
    if(prevProps!==this.props){
        if(this.props.container.filter( (item) => item._id === this.props.data._id).length<=0){
            this.setState({
                click:false
            })
        }
        else{
            this.setState({
                click:true
            })
         //   console.log(this.props.data.name)
        }
    }
    
}
    render(){
    return (
        <LazyLoad height={200} offset={400} once >

        
        <div className={styles.product_card2}>
            <div className={styles.topl}>
                {this.props.data.hand===1?'Fresh':'2nd Hand'}
            </div>
            <div className={styles.upper_half}>
                <img src={this.props.data.image[0]} alt="imag" onClick={async() => { await this.props.getBookbyId(this.props.data._id);await this.props.history.push(`/product/${this.props.data._id}`)}}/>
            </div>

<div className={this.state.click===true?cx(styles.lower_half,styles.clicked):(styles.lower_half)} >

<div className={styles.left}>
        <div className={styles.details}>
    <p onClick={async() => { await this.props.getBookbyId(this.props.data._id); await this.props.history.push(`/product/${this.props.data._id}`)}}
    style={{fontSize: this.props.data.name.length>40?'1.05rem':'1.2rem'}}>{this.props.data.name}<br/>
   </p>
   <span className={styles.author} style={{fontSize: this.props.data.name.length>30 && this.props.data.author.length>20?'0.75rem':'0.85rem'}}>By- {this.props.data.author}</span>
    <span className={styles.price}>₹ {(this.props.data.price).toFixed(2)}</span>
        </div>
        <div className={styles.buy}  onClick={()=>{this.setState({
            click:true
        });
        this.handleAddToCart()
        }} >
            <AddShoppingCartRoundedIcon  className={styles.cart_ic}/>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.done}> <DoneRoundedIcon className={styles.cart_ic}/> </div>
        <div className={styles.details}>
        <p onClick={async() => { await this.props.getBookbyId(this.props.data._id); await this.props.getBooksByKeyword2(this.state.filters,this.props.data.name); await this.props.history.push(`/product/${this.props.data._id}`)}}>{this.props.data.name}<br/>
   </p>
    <span className={styles.price}>₹ {(this.props.data.price).toFixed(2)}</span>
        </div>
        <div className={styles.remove} onClick={()=>{this.setState({
            click:false
        });
        this.handleRemoveFromCart()
        }}> <ClearRoundedIcon className={styles.cart_ic}/> </div>
      </div>
</div>   
        </div>
        </LazyLoad>
    )}
}
const mapStateToProps = (state) => ({
    book: state.book.currentBook,
    cart: state.cart,
    auth:state.auth
});

export default connect(mapStateToProps,{getBookbyId,getBooksByKeyword2})(withRouter(ProductItem))
