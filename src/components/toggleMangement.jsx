import React, {useState} from 'react';

function ShowMessage() {
    const [IsMessage, setIsMessage] = useState(false);

    return (
        <div>
            <button onClick={() => setIsMessage(!IsMessage)}>
                {IsMessage ? "Hide Message" : "Show Message"}
            </button>
            {IsMessage && <h1 style={{color: "red"}}>How is this toggle message function with useSate hook</h1>}
        </div>
    );
}

export default ShowMessage;