import React from 'react';

function GreetDefaultProp(props) {
    return (
        <div>
            <h1>Hey, {props.name}! You are {props.age} years old.</h1>
        </div>
    );
}

// Default props to ensure values exist if none are provided
GreetDefaultProp.defaultProps = {
    name: "Guest",
    age: "Unknown",
};

export default GreetDefaultProp;
