  
import React, { Component } from "react";


const myLogo = 'assets/small-logo.png';
class Header extends Component {
   
  render() {
      let array =["assets/fb-icon.png"];
      let images = array.map(image =>{
          return <img key={image} src= {image} alt="" className="icons"/>
      })
    return (
      <div>
          <img src = {myLogo } alt ="" />
        <div>{images}</div>
        <span>Delicious</span>
        <span className = "best-food">THE BEST FOOD BLOG ON THE WEB</span>
      </div>
    
    );

  }
}
export default Header;