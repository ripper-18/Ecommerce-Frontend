import React, {  Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route,BrowserRouter} from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import {showDialog,hideDialog} from './actions/dialog_actions'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import MainPage from './pages/main_page/MainPage'
import LoginPage from "./pages/login_page/loginScreen"
import CartPage from "./pages/cart_page/Cart"
import OrderPage from './pages/order_page/OrderPage'
import ProfilePage from './pages/profile_page/profile'
import CheckOutPage from './pages/checkout_page/CheckOut'
import AddressPage from './pages/address_page/address'
import ProductPage from './pages/product_page/Product'
import FaqPage from './pages/faq_page/Faq'
import PrivacyPage from './pages/privacy_page/Privacy'
import DisclaimerPage from './pages/disclaimer_page/Disclaimer'
import ReturnsPage from './pages/returns_page/Returns' 
import TermsPage from './pages/terms_page/Terms'

function App(props)   {

        return (
            <BrowserRouter>
            <div className="App">
                <Suspense
                fallback={
                    <React.Fragment>
                        <Loader/>
                    </React.Fragment>
                }
                >

               
                
                    <Header />
                    <main style={{ minHeight: "60vh" }}>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path="/order" exact component={OrderPage}/>
                        <Route path="/profile" exact component={ProfilePage}/>
                        <Route path="/checkout" exact component={CheckOutPage}/>
                        <Route path="/address" exact component={AddressPage} />
                        <Route  path="/product/:id" exact component={ProductPage} />
                        <Route path = "/faq" exact component={FaqPage}/>
                        <Route path = "/privacy" exact component={PrivacyPage}/>
                        <Route path = "/disclaimer" exact component={DisclaimerPage}/>
                        <Route path = "/returns" exact component={ReturnsPage}/>
                        <Route path = "/terms" exact component ={TermsPage}/>

                   </main>
                   </Suspense>
                   <Modal
                    show={props.dialog.isOpen}
                    onHide={props.hideDialog}
                    centered
                    size="sm"
                    style={{
                        zIndex: "999999",
                        fontFamily: "Shentox",
                    }}
                >
                    <Modal.Body>{props.dialog.msg}</Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={props.hideDialog}
                            className="btn btn-outline-danger btn-sm"
                        >
                            OK
                        </button>
                    </Modal.Footer>
                </Modal>
                <Footer />  
            </div>
            </BrowserRouter>   
        );
    
}
const mapStateToProps = (state) => ({
    dialog: state.dialog,
});
export default connect(mapStateToProps, { hideDialog })(App);