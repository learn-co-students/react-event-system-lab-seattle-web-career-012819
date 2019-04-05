import React, { Component } from 'react';

class Keypad extends Component {

  outputKey = () => {
    console.log("Entering password...")
  }

  render(){
    return(
      <div>
      <input id='input' onKeyUp={() => this.outputKey()} type="password" />
      </div>
    )
  }
}
export default Keypad;
