import React, { useState } from 'react';
import './menu.css';

import image8 from './IMAGE (8).png';
import image9 from './IMAGE (9).png';
import image10 from './IMAGE (10).png';
import image11 from './IMAGE (11).png';
import image12 from './IMAGE (12).png';
import image7 from './IMAGE7.png';

const menuItems = [
  { name: 'Burger Dreams', price: 9.20, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image8 },
  { name: 'Burger Waldo', price: 10.00, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image9 },
  { name: 'Burger Cali', price: 8.00, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image10 },
  { name: 'Burger Bacon Buddy', price: 9.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image11 },
  { name: 'Burger Spicy', price: 9.20, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image12 },
  { name: 'Burger Classic', price: 8.00, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', image: image7 },
];

const Menu = ({ onAddToCart }) => {
  const [cartCounts, setCartCounts] = useState(Array(menuItems.length).fill(0));
  const [totalPrice, setTotalPrice] = useState(0); // New state for total price

  const handleAddToCart = (index) => {
    const newCartCounts = [...cartCounts];
    newCartCounts[index] += 1;
    setCartCounts(newCartCounts);
    const itemPrice = menuItems[index].price;
    setTotalPrice(prevTotal => prevTotal + itemPrice); // Update total price
    onAddToCart(1); 
  };

  return (
    <div className="menu-container">
      <h2>Browse our menu</h2>
      <p>Use our menu to place an order online, or phone our store <br /> to place a pickup order. Fast and fresh food.</p>
      <div className="menu-buttons">
        <button className="menu-button active">Burgers</button>
        <button className="menu-button">Sides</button>
        <button className="menu-button">Drinks</button>
      </div>
      <div className='menu'>
        <div className="menu-list">
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="menu-item-content">
                <div className="menu-item-footer">
                  <h3>{item.name}</h3>
                  <span className="menu-price">
                 
                  ${item.price} USD
                  </span>
                </div>
                <p>{item.description}</p>
                <div className="menu-items">
                  <span className='increment'>{cartCounts[index]}</span>
                  <button
                    className="add-to-cart-button"
                    onClick={() => handleAddToCart(index)}>
                    Add to cart
                  </button>
                  <span className="menu-total-price">
                 TOTAL =  ${(item.price * cartCounts[index]).toFixed(2)} USD
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <div className="total-price">
        <h3>Total Price: ${totalPrice.toFixed(2)} USD</h3> {/* Display total price */}
      </div>
      <button className="see-full-menu-button">See Full Menu</button>
    </div>
  );
};

export default Menu;
