import React, {  Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route,BrowserRouter,Switch} from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import {hideDialog} from './actions/dialog_actions'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";

import PrivateRoute from "./pages/common/PrivateRoute"



function App(props)   {
    const MainPage=React.lazy(()=>
    import('./pages/main_page/MainPage'))

    const PWC = React.lazy(()=>
    import('./pages/product_without_carousel_page/pwc'))

    const LoginPage=React.lazy(()=>
    import('./pages/login_page/loginScreen'))

    const CartPage=React.lazy(()=>
    import('./pages/cart_page/Cart'))

    const OrderPage=React.lazy(()=>
    import('./pages/order_page/OrderPage'))

    const ProfilePage=React.lazy(()=>
    import('./pages/profile_page/profilet'))

    const CheckOutPage=React.lazy(()=>
    import('./pages/checkout_page/CheckOut'))

    const AddressPage=React.lazy(()=>
    import('./pages/address_page/address'))

    const ProductPage=React.lazy(()=>
    import('./pages/product_page/Product'))

    const FaqPage=React.lazy(()=>
    import('./pages/faq_page/Faq'))

    const PrivacyPage=React.lazy(()=>
    import('./pages/privacy_page/Privacy'))

    const DisclaimerPage=React.lazy(()=>
    import('./pages/disclaimer_page/Disclaimer'))

    const ReturnsPage=React.lazy(()=>
    import('./pages/returns_page/Returns'))

    const TermsPage=React.lazy(()=>
    import('./pages/terms_page/Terms'))

    const ErrorPage = React.lazy(() =>
    import('./pages/error_page/error404_page'))

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
                    
                    <Header style={{position:"sticky"}} />
                    <main style={{ minHeight: "60vh" }}>
                    <Switch>
                        <Route path="/loader" exact component={Loader}/>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path='/category/:course/:year' exact component={PWC}/>
                        <Route  path="/product/:id" exact component={ProductPage} />
                        <Route path = "/faq" exact component={FaqPage}/>
                        <Route path = "/privacy" exact component={PrivacyPage}/>
                        <Route path = "/disclaimer" exact component={DisclaimerPage}/>
                        <Route path = "/returns" exact component={ReturnsPage}/>
                        <Route path = "/terms" exact component ={TermsPage}/>

                        <PrivateRoute path="/order" exact component={OrderPage}/>                       
                        <PrivateRoute path="/profile" exact component={ProfilePage}/>
                        <PrivateRoute path="/checkout" exact component={CheckOutPage}/>                 
                        <PrivateRoute path="/address" exact component={AddressPage} />                     
                        
                        <Route  component={ErrorPage} />
                        </Switch>     
                   </main>
                   <Footer />  
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
               
            </div>
            
            </BrowserRouter>   
        );
    
}
const mapStateToProps = (state) => ({
    dialog: state.dialog,
});
export default connect(mapStateToProps, { hideDialog })(App);