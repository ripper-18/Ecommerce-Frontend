import React, {  Suspense ,useEffect} from "react";
import Loader from "./components/Loader/Loader";
import { Route,BrowserRouter,Switch,Router,browserHistory,applyRouterMiddleware} from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import {Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import {hideDialog} from './actions/dialog_actions'

import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import PrivateRoute from "./pages/common/PrivateRoute"
import { StickyContainer, Sticky } from 'react-sticky';


function App(props)   {
    const MainPage=React.lazy(()=>
    import('./pages/main_page/MainPage'))

    const PWC = React.lazy(()=>
    import('./pages/product_without_carousel_page/pwc'))

    const PWC2=React.lazy(()=>
    import('./pages/product_without_carousel_2page/pwc'))

    const PWC3 = React.lazy(() =>
    import('./pages/product_without_carousel_3page/pwc'))

    const LoginPage=React.lazy(()=>
    import('./pages/login_page/loginScreen'))

    const CartPage=React.lazy(()=>
    import('./pages/cart_page/Cart2'))

    const OrderPage=React.lazy(()=>
    import('./pages/order_page/OrderPage'))

    const ProfilePage=React.lazy(()=>
    import('./pages/profile_page/profilet'))

    const CheckOutPage=React.lazy(()=>
    import('./pages/checkout_page/Checkout2'))

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

    const SellerRegPage = React.lazy(() =>
    import('./pages/seller_registration_page/SellerReg'))

    const AboutUsPage = React.lazy(() =>
    import('./pages/about_us/AboutUs')
    )
    
    useEffect(() => {
      
       console.log(props.loader.isLoading)
    }, [props])

        return (
            <BrowserRouter>
            
           <StickyContainer>
            <div className="App">
                <Suspense
                fallback={
                    <React.Fragment>
                        <Loader/>
                    </React.Fragment>
                }
                
                >
                     <Sticky>
          {({
            style,
            isSticky,
            
            // the following are also available but unused in this example
       
          }) => (
              <div style={{...style,width:"100%",zIndex:20,display: props.loader.isLoading?'none':'initial'}}>
                <Header />
              </div>
         
          )}
        </Sticky>

                       <main style={{ minHeight: "60vh"}}>
                        {
                            props.loader.isLoading?
                            <>
                            <Loader/>
                            </>:
                            <>

<Switch>
                        <Route path="/loader" exact component={Loader}/>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path='/category/:course/:year' exact component={PWC}/>
                        <Route path='/search' exact component={PWC2} />
                        <Route  path="/product/:id" exact component={ProductPage} />
                        <Route path = "/faq" exact component={FaqPage}/>
                        <Route path = "/privacy" exact component={PrivacyPage}/>
                        <Route path = "/disclaimer" exact component={DisclaimerPage}/>
                        <Route path = "/returns" exact component={ReturnsPage}/>
                        <Route path = "/terms" exact component ={TermsPage}/>
                        <Route path ="/seller_reg" exact component ={SellerRegPage} /> 
                        <Route path='/category/:course' exact component={PWC3} />    
                        <Route path='/about' exact component={AboutUsPage}/>

                        <PrivateRoute path="/order" exact component={OrderPage}/>                       
                        <PrivateRoute path="/profile" exact component={ProfilePage}/>
                        <PrivateRoute path="/checkout" exact component={CheckOutPage}/>                 
                        <PrivateRoute path="/address" exact component={AddressPage} />  
                             
                        
                        <Route  component={ErrorPage} />
                        </Switch>     
                            </>
                        }

                       
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
            </StickyContainer>
           
            </BrowserRouter>   
        );
    
}
const mapStateToProps = (state) => ({
    dialog: state.dialog,
    loader:state.load
});
export default connect(mapStateToProps, { hideDialog })(App);