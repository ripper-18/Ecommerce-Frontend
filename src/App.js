import React, {  Suspense } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader'


function App() {
  const MainPage=React.lazy(()=>
  import('./pages/main_page/MainPage'))

  const LoginPage=React.lazy(()=>
  import('./pages/login_page/loginScreen'))

  return (
    <div className="App">
      <Suspense
                    fallback={
                        <React.Fragment>
                            <Loader />
                        </React.Fragment>
                    }
                >
                  <Header/>
                  <main style={{minHeight:"60vh"}}>
                    <Route path="/" exact component={MainPage}/>
                    <Route  path="/login" exact component={LoginPage}/>

                  </main>
                </Suspense>
                <Footer/>
    </div>
  );
}

export default App;
