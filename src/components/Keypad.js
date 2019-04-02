import React, { Component } from 'react';

export default class EyesOnMe extends Component{
  handleKeyUp = (ev) => {console.log("Entering password...")}

  render() {
    return (
      <input type="password" onKeyUp={this.handleKeyUp} />
    )
  }
}
