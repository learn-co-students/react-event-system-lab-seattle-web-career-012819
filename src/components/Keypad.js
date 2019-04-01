import React, { Component } from 'react'

export default class Keypad extends Component {
  render(){

    let onKeyUp = () => {console.log('Entering password...')}

    return <input type="password" onKeyUp={onKeyUp}></input>
  }
}
