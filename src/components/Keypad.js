import React from 'react';

class Keypad extends React.Component {

  renderInput = () => console.log("Entering password...")

  render() {
    return (
      <div>
      <input
      type="password"
      onKeyUp={this.renderInput}
      />
      </div>
    )
  }
}

export default Keypad
