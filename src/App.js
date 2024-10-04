import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Hero from './components/Hero/hero';
import Menu from './components/Menu/menu';
import Order from './components/Order/order';
import Store from './components/Store/store';
import Footer from './components/Footer/footer';
import { useState } from 'react';

function App() {
  const [cartCounts, setCartCounts] = useState(0); 

  const handleAddToCart = (count) => {            
    setCartCounts(cartCounts + count);            
  };

  return (
    <div className="App">
      <Navbar cartCounts={cartCounts} /> 
      <Home />
      <Hero />
      <Menu onAddToCart={handleAddToCart} /> 
      <Order />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
