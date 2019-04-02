import React, { Component } from 'react'

export default class Keypad extends Component {

  logPwd = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input 
        type="password"
        onKeyUp={this.logPwd}
      ></input>
    )
  }
}