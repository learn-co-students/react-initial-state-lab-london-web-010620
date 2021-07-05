// your ImageSlider code here!
import React, { Component } from "react";

export default class ImageSlider extends React.Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }
    
    increment = () => {
        const newCount = this.state.currentSlideIndex + 1
        this.setState({
            count: newCount
        })
    }
 
    render(){
        return (
            <div onClick={this.increment}>
              <h2>I am on slide {this.state.currentSlideIndex}</h2>
            </div>
          )
 }
}