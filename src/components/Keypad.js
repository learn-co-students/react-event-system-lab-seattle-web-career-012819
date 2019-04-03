import React, { Component } from 'react'

class KeyPad extends Component {
  keyUpHandler = (event) => {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.keyUpHandler} />
      </div>
    )
  }
}
export default KeyPad
