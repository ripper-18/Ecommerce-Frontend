import React, {Component,  Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";


class App extends Component {
    render() {
        const MainPage = React.lazy(() =>
            import("./pages/main_page/MainPage")
        );
        const LoginPage = React.lazy(() =>
            import("./pages/login_page/loginScreen")
        );
        const CartPage = React.lazy(() => 
            import("./pages/cart_page/Cart")
        );
        const OrderPage = React.lazy(() =>
            import("./pages/order_page/OrderPage")
        )
        
        return (
            <div className="App">
                <Suspense
                    fallback={
                        <React.Fragment>
                            <Loader />
                        </React.Fragment>
                    }
                >
                    <Header />
                    <main style={{ minHeight: "60vh" }}>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/login" exact component={LoginPage}/>
                        <Route path="/cart" exact component={CartPage}/>
                        <Route path="/order" exact component={OrderPage}/>
                    </main>
                </Suspense>
                <Footer />
            </div>
        );
    }
}

export default App