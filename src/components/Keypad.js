import React, { Component } from 'react';

class Keypad extends Component {

  iHateCodingToday = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input
          type='password'
          onKeyUp={this.iHateCodingToday}
        />
      </div>
    );
  }
}

export default Keypad;