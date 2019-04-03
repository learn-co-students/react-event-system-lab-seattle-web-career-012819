import React, { Component } from 'react';

class EyesOnMe extends Component {
    focused = () => {
        console.log("Good!")
    }
    notFocused = () => {
        console.log("Hey! Eyes on me!")
    }
    render() {
        return (
            <div>
                <button onFocus={this.focused} onBlur={this.notFocused}></button>
            </div>
        );
    }
}

export default EyesOnMe;
