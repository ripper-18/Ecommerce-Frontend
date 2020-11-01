import './App.css';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/main_page/MainPage';
import LoginPage from './pages/login_page/loginScreen';
import ProductPage from './pages/product_page/Product';
function App() {
  return (
    <div className="App">
      <Header></Header>
        {/* <MainPage /> */}
        {/* <LoginPage></LoginPage> */}
        <ProductPage></ProductPage>
      <Footer></Footer>

    </div>
  );
}

export default App;