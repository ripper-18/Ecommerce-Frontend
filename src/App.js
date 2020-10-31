import './App.css';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/main_page/MainPage'

function App() {
  return (
    <div className="App">
      <Header></Header>
        <MainPage />
        
      <Footer></Footer>
    </div>
  );
}

export default App;
