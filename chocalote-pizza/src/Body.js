import React, { Component } from "react";



let receipImg="assets/list-bg.png";
class Body extends Component {
render() {
    let listArray=["1/2 tbsp sugar","2 cups milk","2 cups flour","1/3 cup brown sugar","1 cup coco powder","1 tbsp baking soda", "1 tbsp baking powder","1 1/2 cups of chocalate chips","2 tbsp yeasts"]
    let listItem = listArray.map(item =>{
        return <li className="item" key={item}>{item}</li>
    })
    return(
<div>
    <div className="pizza-date">
    <h2 className="chocolate-pizza">Chocolate Pizza</h2>

    <h6>PSOTED ON DEC 23 2013/DESSERT</h6>
    <div>
        <img className="pizzaImg" src={this.props.pizzaImg} alt=""/>
    </div>
    </div>
    <p className="p1">If you like cacio e pepe pasta, just imagine it in the form of a pizza. This underrated Neapolitan pizza place happens to be around the corner from my apartment in Park Slope. So I found myself there more often than almost anywhere else in 2019. The stand out pie on the menu is a conglomeration of cheeses, topped off with a generous pinch of black pepper. The post-oven ricotta dollops make for some standout Instagram shots (this pizza might win the award for “Best Dressed Pie” of 2019), but it wouldn’t be on this list if it wasn’t also delicious.</p>
    <p className="p2">This pizza doesn’t just have a great name, but it’s unique combination of toppings made it stand out from the pack at Young Joni, a happening restaurant in Minneapolis where I was quoted a 2 hour wait at 10PM on a Saturday evening in late August. There were many menu highlights — including some non-pizza items — but this was my favorite pie of the night. No topping overwhelmed the pie, but the perfectly ground lamb almost melts in your mouth (and the cheese actually does). Every bite contained Mediterranean inspired flavors.</p>
    <div>
        <img className ="receipImg"src={receipImg} alt=""/>
    </div>
    <ul className="listItem">
        {listItem}
    </ul>

</div>
    );
};

}
export default Body;