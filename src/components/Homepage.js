import React from 'react';
import '../App.css';



const HomePage = () => {

  return (
    <div className="intro">
      <div className="intro-title">
        <h1>Trade with us</h1>
        <h2>Buy and sell cryptocurrency</h2>
        <p>Fast and secure way to buy and<br/> exchange the top crypto coins</p>
        <div className="intro-buttons">
          <button className="get-started">Get Started</button>
          <button className="browse-coins">Browse Now</button>
        </div>
      </div>
      <div className="intro-image">
        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" />       
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default HomePage;
