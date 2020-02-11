import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body';
import Paragrah from './Paragrah.js';
import Ingredients from './Ingredients.js';
import Footer from './Footer.js';
import './App.css';

let myLogo = 'assets/small-logo.png';
let authorImg="assets/van-pic.png";
let footerImg="assets/small-logo.png"
let pizzaImg="assets/choco-pizza.png";
let listArray=["1/2 tbsp sugar","2 cups milk","2 cups flour","1/3 cup brown sugar","1 cup coco powder","1 tbsp baking soda", "1 tbsp baking powder","1 1/2 cups of chocalate chips","2 tbsp yeasts"]
let listItem = listArray.map(item =>{
    return <li className="item" key={item}>{item}</li>
})
export default class App extends Component {
  render() {
    return (
      <div className="App">
    
        <Header myLogo={myLogo}/>
        <Body pizzaImg={pizzaImg} />
        <Ingredients listItem={listItem} />
        <Paragrah />
        <Footer imag1={authorImg} footerImg={footerImg}/>
    
      </div>
    );
  }
}
