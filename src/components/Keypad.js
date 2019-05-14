import React, { Component } from 'react'

class Keypad extends Component {

    handleClick(){
        console.log("Entering password...")
    }

    render(){
        return(
            <div>
                <input type="password" onKeyUp={this.handleClick}></input>
            </div>
        )
    }
}

export default Keypad


//NOTES:
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.