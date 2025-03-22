import {useRef, useState} from 'react';

function BoxWidth() {
    const boxRef = useRef(null);
    const [width, setWidth] = useState(0);

    const measureWidth = () => {
        if (boxRef.current) {
            setWidth(boxRef.current.offsetWidth);
        }
    }

    return (
        <div>
            <div ref={boxRef} 
            style={{width: '450px',
                height: "100px",
                backgroundColor: "lightblue",
                border: "2px solid blue"
            }}>
                Resize Me !

            </div>
            <button onClick={measureWidth}>Get Width</button>
            {width > 0 && <p>Box Width: {width}px</p>}
        </div>
    );
}

export default BoxWidth;