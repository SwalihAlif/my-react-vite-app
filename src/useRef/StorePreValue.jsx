import { useState, useEffect, useRef } from "react";

function StorePreValue() {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null)
    const prevInputRef = useRef("")

   
    const handleSave = () => {
        prevInputRef.current = inputValue;
        setInputValue("")
    }

    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow'
    }

    return (
        <div>
            <input ref={inputRef} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => {handleSave(); handleFocus(); }}>Store Value</button>
            <p>Current Value: {inputValue}</p>
            <p>Previous Value: {prevInputRef.current}</p>
        </div>
    )
}

export default StorePreValue;