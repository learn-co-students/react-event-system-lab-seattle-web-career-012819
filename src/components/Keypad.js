// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handleClick(){
    console.log("Entering Password...")
  }

  render() {
    return (
      <div>
        <input type="text" onclick={this.handleClick}></input>
      </div>
    );
  }
}

export default Keypad;
