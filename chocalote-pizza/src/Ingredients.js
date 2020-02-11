import React, { Component } from "react";
class Ingredients extends Component{
    render(){
   
        return(
            <div>
                <ul className="listItem">
                    {this.props.listItem}
                </ul>
            </div>
        );
    }
}
export default Ingredients;