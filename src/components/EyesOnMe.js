import React, { Component } from 'react';

class EyesOnMe extends Component {
  outputFocus = () => {
    console.log("Good!")
  }

  outputBlur = () => {
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <div>
      <button onBlur={() => this.outputBlur()} onFocus={() => this.outputFocus()}></button>
      </div>
    )
  }
}
export default EyesOnMe;
