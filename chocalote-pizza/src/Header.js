  
import React, { Component } from "react";



const backLine = 'assets/hr-img.png';
class Header extends Component {
   
  render() {
      let array =["assets/fb-icon.png","assets/twit-icon.png","assets/gp-icon.png","assets/insta-icon.png","assets/flic-icon.png","assets/pint-icon","assets/rss-icon.png","assets/mail-icon.png"];
      let images = array.map(image =>{
          return <img key={image} src= {image} alt=""/>
      })
    return (
      <div>
          <img className ="logo" src = {this.props.myLogo } alt ="" />
        <span className="delicious">Delicious</span>
        <div className = "best-food">THE BEST FOOD BLOG ON THE WEB</div>
        <div className="icons">
          {images}
        </div>
        <div>
          <img className="backLineRepeat" src ={backLine} alt =""/>
        </div>
      </div>
    
    );

  }
}
export default Header;