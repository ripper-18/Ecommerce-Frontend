import React, {Component,  Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route,Switch,BrowserRouter} from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import MainPage from './pages/main_page/MainPage'
import LoginPage from "./pages/login_page/loginScreen"
import CartPage from "./pages/cart_page/Cart"
import OrderPage from './pages/order_page/OrderPage'
import ProfilePage from './pages/profile_page/profile'


function App()   {

        return (
            <BrowserRouter>
            <div className="App">
                
                    <Header />
                    <main style={{ minHeight: "60vh" }}>
                        
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path="/order" exact component={OrderPage}/>
                        <Route path="/profile" exact component={ProfilePage}/>
                   </main>
                <Footer />  
            </div>
            </BrowserRouter>   
        );
    
}

export default App