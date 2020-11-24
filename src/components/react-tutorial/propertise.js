import React from 'react';

const propertise = ({example, example2}) => {
    return (
        <div>
            <h1>Propertise from parent component :</h1>
            <ul>
                <li>{example}</li>
                <li>{example}</li>
            </ul>
        </div>
    );
};

export default propertise;