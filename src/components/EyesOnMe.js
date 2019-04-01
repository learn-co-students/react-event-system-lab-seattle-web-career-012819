import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  render(){

    let onFocus = () => {console.log('Good!')}

    let onBlur = () => {console.log('Hey! Eyes on me!')}


    return <button onFocus={onFocus} onBlur={onBlur}></button>
  }
}
