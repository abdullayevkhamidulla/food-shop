import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Hero from './components/Hero/hero';
import Menu from './components/Menu/menu';
import Order from './components/Order/order';
import Store from './components/Store/store';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Hero/>
      <Menu/>  
      <Order/>
      <Store/>
      <Footer/>
    </div>
  );
}

export default App;
