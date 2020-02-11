import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body';
import Footer from './Footer.js';
import './App.css';

let myLogo = 'assets/small-logo.png';
let authorImg="assets/van-pic.png";
let footerImg="assets/small-logo.png"
let pizzaImg="assets/choco-pizza.png";

export default class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Header myLogo={myLogo}/>
        <Body pizzaImg={pizzaImg} />
        <Footer imag1={authorImg} footerImg={footerImg}/>
    
      </div>
    );
  }
}
