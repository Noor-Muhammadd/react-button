import React, { Component } from 'react';

class state extends Component {
    state = {
        clicks : 0
    }

    button = () => {
        this.setState(clicks + 1)
    }

    render() {
        return (
            <div>
                <button onClick={this.button}>
                    Click me
                </button>

                <span>
                    {this.state.clicks}
                </span>
            </div>
        );
    }
}

export default state;