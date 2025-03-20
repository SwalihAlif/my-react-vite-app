import React from 'react';

function GreetProp(prop) {
    return (
        <div>
            <h1 style={{color: "blueviolet"}}>Hello, {prop.name}.</h1>
            <p style={{color: "burlywood", fontSize: "29px"}}>You are {prop.age} years old.</p>
        </div>
    )
}

export default GreetProp;