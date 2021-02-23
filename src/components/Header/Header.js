import React, { Component } from 'react'
import styles from './Header.module.css'
import Headroom from "react-headroom";
import { Link, withRouter } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth_actions";
import { showDialog } from '../../actions/dialog_actions'
import logo from '../../assets/logo2.png'
import Sidebar from './Sidebar'
import './headroom.css'
class Header extends Component {
    state = {
        keyword: ""
    }

    componentDidMount() {
        // console.log(this.props)
        //this.props.logoutUser(this.props.history)
    }

    setKeyword(e) {
        if (e.key === 'Enter') {
            this.submitSearch();
            return
        }
        this.setState({
            ...this.state,
            keyword: e.target.value
        })
        //console.log(e.target.value)
    }
    submitSearch = async () => {
        if (this.state.keyword === '') {
            this.props.showDialog('Search cant be empty!')
            return
        }

        this.props.history.push(`/search?search=${this.state.keyword}`)
        window.location.reload()
    }
    submitSearch2 = async () => {


        this.props.history.push(`/`)
        window.location.reload()
    }


    render() {
        return (
            <>
                <Headroom style={{
                    transition: 'all 1s ease-in-out',
                    zIndex: "2000"
                }}
                >
                    <div className={styles.header}>

                        <Sidebar />
                        <Link to="/"><img className={styles.header_logo} onClick={async () => {
                            await this.setState({
                                ...this.state,
                                keyword: ""
                            });
                            this.submitSearch2()
                        }} src={logo} alt="DUBookX" /></Link>

                        <div className={styles.header_search}>
                            <input className={styles.header_search_input} placeholder="Search for Books" value={this.state.keyword} onChange={(e) => this.setKeyword(e)}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.submitSearch()
                                    }
                                }}></input>
                            <div className={styles.header_search_icon_div}>
                                <SearchIcon className={styles.header_search_icon} onClick={this.submitSearch}></SearchIcon>
                            </div>
                        </div>

                        <div className={styles.header_nav}>
                            <a href="https://forms.gle/oLCtFj8pe9YbwGcd7">
                                <div className={styles.header_option2}>
                                    Become a Donor
                </div></a>
                            <Link to="/seller_reg">
                                <div className={styles.header_option2}>
                                    Become a Seller
                </div>
                            </Link>

                            <div className={styles.header_option}>
                                {!this.props.auth.isAuth ? (
                                    <Link to="/login" className={styles.header_links}>
                                        <span className={styles.header_option_lineOne}><ExitToAppIcon className="exit-app-icon icon"></ExitToAppIcon></span>
                                        {/* <span className="header-option-lineTwo">LOGIN</span> */}
                                    </Link>
                                ) : (
                                        <Link to="/profile" className={styles.header_links}>
                                            <span className={styles.header_option_lineOne}><AccountCircleIcon className="account-app-icon icon" /></span>
                                            {/* <span className="header-option-lineTwo">ACCOUNT</span> */}
                                        </Link>
                                    )}

                            </div>


                            <div className={styles.header_option} >
                                {(<Link to="/cart" className={styles.header_links}>
                                    <span className={styles.header_option_lineOne} >

                                        <span className={styles.dynamic_cart} style={{ visibility: this.props.cart.bookCart.length === 0 ? 'hidden' : 'initial' }}>{this.props.cart.bookCart.length} </span>

                                        <span className=""><ShoppingCartIcon className="icon"></ShoppingCartIcon></span>

                                    </span>



                                    {/* <span className="header-option-lineTwo">CART</span> */}
                                </Link>)}

                            </div>
                        </div>
                    </div>
                    <div className={styles.header_search_two}>
                        <input className={styles.header_search_input} placeholder="Search for Books" value={this.state.keyword} onChange={(e) => this.setKeyword(e)} ></input>
                        <div className={styles.header_search_icon_div}>
                            <SearchIcon className={styles.header_search_icon} onClick={this.submitSearch}></SearchIcon>
                        </div>
                    </div>
                </Headroom>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    cart: state.cart,
});

export default connect(mapStateToProps, { logoutUser, showDialog })(withRouter(Header))


//we have something called a props tree in our redux, see rootreducers file, this file has all the reducers combined into one
//now the props tree is as follows props ->  then all the things exported in rootreducer->then all the property of each item exported in root reducer
//the map state to props function does exactly what it says it maps all the states to the props and now any part or componenet of the state can be used using the this.props....syntax
//the withrouter part here see its documentation...thsi one provides us with that history thing
//this.props.auth.isAuth we simply evaluated this condition and returned whatever we wanted to on the basis of these conditions
//using this the icon part can be done...returning a  diffrent icon for different case and returning a normal icon for the case when the cart is empty.....