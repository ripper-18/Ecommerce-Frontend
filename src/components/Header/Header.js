import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <div className="header">
           <Link to="/"><img className="header-logo" src="https://i.ibb.co/GWBKTFW/DU.png" alt="DUBookX"/></Link> 

            <div className="header-search">
                <input className="header-search-input" placeholder="Enter Your Favorite Book"></input>
                <SearchIcon className="header-search-icon"></SearchIcon> 
            </div>

            <div className="header-nav">
                <div className="header-option">
                <Link to="/login" className="header-links">
                    <span className="header-option-lineOne"><ExitToAppIcon></ExitToAppIcon></span>
                    <span className="header-option-lineTwo">Login</span>
                </Link>
                </div>
                
                <div className="header-option">
                <Link to="/cart" className="header-links">
                    <span className="header-option-lineOne"><ShoppingCartIcon></ShoppingCartIcon></span>
                    <span className="header-option-lineTwo">Cart</span>
                </Link>
                </div>
                
                    <div className="header-option">
                    <a href="#"  className="header-links">
                        <span className="header-option-lineOne"><AccountCircleIcon/></span>
                        <span className="header-option-lineTwo">Account</span>
                    </a>
                    </div>

            </div>
        </div>
    )
}

export default Header
