import {useRef} from 'react';

function FocusInput() {
    const inputRef = useRef(null);

    const HandleFocus = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    };

    return (
        <div>
            <h2>useRef Example: Focus Input</h2>
            <input ref={inputRef} type="text" placeholder='Type something...'/>
            <button onClick={HandleFocus}>Focus Input</button>
        </div>
    )
}

export default FocusInput;