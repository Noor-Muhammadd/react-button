import React, { Component } from 'react';

class propertiseClass extends Component {
    render() {
        return (
            <div>
                <h1>propertise from parent component :</h1>
                <ul>
                    <li>{this.props.example}</li>
                    <li>{this.props.example}</li>
                </ul>                
            </div>
        );
    }
}

export default propertiseClass;