import {useState, useEffect} from 'react';

function Counter2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return(
        <div>
            <h1>Counter Page</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} >Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter2;

