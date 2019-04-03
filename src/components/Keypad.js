import React, { Component } from 'react';

class Keypad extends Component {
    separating = () => {
        console.log("Entering password...")
    }
    render() {
        return (
                <input type="password" onKeyUp={this.separating}></input>
        );
    }
}

export default Keypad;
