import React, {  Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route,BrowserRouter} from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import MainPage from './pages/main_page/MainPage'
import LoginPage from "./pages/login_page/loginScreen"
import CartPage from "./pages/cart_page/Cart"
import OrderPage from './pages/order_page/OrderPage'
import ProfilePage from './pages/profile_page/profile'
import CheckOutPage from './pages/checkout_page/CheckOut'
import AddressPage from './pages/address_page/address'

function App()   {

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
                   </main>
                   </Suspense>
                <Footer />  
            </div>
            </BrowserRouter>   
        );
    
}

export default App