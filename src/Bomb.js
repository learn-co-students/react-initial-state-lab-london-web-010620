// your Bomb code here!
import React, { Component } from "react";

export default class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    increment = () => {
        const newCount = this.state.secondsLeft + 1
        this.setState({
            secondsLeft: newCount
        })
    }

    render(){
        return (
            <div onClick={this.increment}>
              <h2>{this.state.secondsLeft === 0 ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"}</h2>
            </div>
          )
 }
}