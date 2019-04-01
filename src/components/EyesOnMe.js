import React, { Component } from 'react';

class EyesOnMe extends Component {

  focusTime = () => console.log('Good!')

  blurTime = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button
        onFocus={this.focusTime}
        onBlur={this.blurTime}
      />
    );
  }
}

export default EyesOnMe;
