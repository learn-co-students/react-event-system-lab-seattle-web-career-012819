// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component{

  handdleFocus = () =>{
    console.log('Good!')
  }

  handleBlur = () =>{
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
    <button
    onFocus ={this.handdleFocus}
    onBlur = {this.handleBlur}
    >
    Eyes on me, please!
    </button>
  )
  }
}

export default EyesOnMe;
