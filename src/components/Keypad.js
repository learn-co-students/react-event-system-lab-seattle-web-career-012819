import React, { Component } from 'react';

class Keypad extends Component {

    onKey() {
        console.log('Entering password...')
    }
    render() {
        return (
            <input type='password' onKeyUp={this.onKey} />
        );
    }
}

export default Keypad;
