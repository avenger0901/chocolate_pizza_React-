import React, { Component } from "react";



let receipImg="assets/list-bg.png";
class Body extends Component {
render() {
    
    return(
<div>
    <div className="pizza-date">
    <h2 className="chocolate-pizza">Chocolate Pizza</h2>

    <h6>PSOTED ON DEC 23 2013/DESSERT</h6>
    <div>
        <img className="pizzaImg" src={this.props.pizzaImg} alt=""/>
    </div>
    </div>
    
    <div>
        <img className ="receipImg"src={receipImg} alt=""/>
    </div>

</div>
    );
};

}
export default Body;