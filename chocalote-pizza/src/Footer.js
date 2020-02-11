import React, { Component } from "react";



class Body extends Component {
    render() {
        return(
            <div>
                <img className="authorImg" src ={this.props.imag1} alt=""/>
                <h5 className="authorName">Venessa Stevenson</h5>
                <div className="authorInfo">Food expert. Blogger. Making chocolate pizza
                </div>
                <button className="button">Share Receipe</button>
                <img className="footerImg" src={this.props.footerImg} alt=""/>
                <div className="footerInfo">All rights all reserved. Delicious 2013. </div>
                <div className="footerInfo2">Proudly published with Ghost</div>
            </div>

        );
    }









}
export default Body;