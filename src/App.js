import './App.css';
import {Container} from 'react-bootstrap';
import  Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <h1> WELCOME !</h1>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
