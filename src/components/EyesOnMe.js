import React, { Component } from 'react'

class EyesOnMe extends Component {

    handleFocus(){
        console.log("Good!")
    }
    handleBlur(){
        console.log("Hey! Eyes on me!")
    }


    render(){
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }
}

export default EyesOnMe

//NOTES:

// Eyes on the ball
// Let's say you're in the club with your buddy. The music's blaring, lights are flashing... It's so hard to get his attention! Your job is to create a component that registers whenever he focuses on you, and when his eyes are drifting off.

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button.
// On that button, add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
