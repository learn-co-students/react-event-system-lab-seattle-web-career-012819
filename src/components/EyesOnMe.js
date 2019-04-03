import React, { Component } from 'react'

class EyesOnMe extends Component {
  focusHandler = (event) => {
    console.log('Good!')
  }
  blurHandler = (event) => {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <div>
        <button onFocus={this.focusHandler} onBlur={this.blurHandler}>
          Lookit Me
        </button>
      </div>
    )
  }
}

export default EyesOnMe