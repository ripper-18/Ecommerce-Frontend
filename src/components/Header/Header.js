import React,{Component} from 'react'
import './Header.css'
import {Link,withRouter} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth_actions";
class Header extends Component{

    componentDidMount(){
       // console.log(this.props)
    }

    render(){
    return (
        <div className="header">
           <Link to="/"><img className="header-logo" src="https://i.ibb.co/GWBKTFW/DU.png" alt="DUBookX"/></Link> 

            <div className="header-search">
                <input className="header-search-input" placeholder="Enter Your Favorite Book"></input>
                <SearchIcon className="header-search-icon"></SearchIcon> 
            </div>

            <div className="header-nav">
                <div className="header-option">
                    {!this.props.auth.isAuth?(
                        <Link to="/login" className="header-links">
                        <span className="header-option-lineOne"><ExitToAppIcon></ExitToAppIcon></span>
                        <span className="header-option-lineTwo">Login</span>
                    </Link>
                    ):(
                        <Link to="/profile"  className="header-links">
                        <span className="header-option-lineOne"><AccountCircleIcon/></span>
                        <span className="header-option-lineTwo">Account</span>
                    </Link>
                    )}
                
                </div>
                

                <div className="header-option">
                    {this.props.cart.bookCart.length ? (<Link to="/cart" className="header-links">

                        <span className='header-option-lineOne'>
                            <span className='dynamic_cart'>{this.props.cart.bookCart.length}</span>

                            <span className=""><ShoppingCartIcon></ShoppingCartIcon></span>
                           
                        </span>
                        
                        
                        
                        <span className="header-option-lineTwo">Cart</span>
                    </Link>) : (<Link to="/cart" className="header-links">
                        <span className="header-option-lineOne"><ShoppingCartIcon></ShoppingCartIcon></span>
                        <span className="header-option-lineTwo">Cart</span>
                    </Link>)}


                {/* <Link to="/cart" className="header-links">
                    <span className="header-option-lineOne"><ShoppingCartIcon></ShoppingCartIcon></span>
                    <span className="header-option-lineTwo">Cart</span>
                </Link> */}
                </div>
            </div>
        </div>
    )}
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    cart: state.cart,
});

export default connect(mapStateToProps,{logoutUser})(withRouter(Header))


//we have something called a props tree in our redux, see rootreducers file, this file has all the reducers combined into one
//now the props tree is as follows props ->  then all the things exported in rootreducer->then all the property of each item exported in root reducer
//the map state to props function does exactly what it says it maps all the states to the props and now any part or componenet of the state can be used using the this.props....syntax
//the withrouter part here see its documentation...thsi one provides us with that history thing
//this.props.auth.isAuth we simply evaluated this condition and returned whatever we wanted to on the basis of these conditions
//using this the icon part can be done...returning a  diffrent icon for different case and returning a normal icon for the case when the cart is empty.....