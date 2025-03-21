import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/hello'
import Greet from './components/greet'
import QuoteOfTheDay from './components/quote'
import SyntaxHtmlJsx from './components/syntax'
import GreetProp from './components/greetProp'
import GreetDefaultProp from './components/DefProp'
import Counter from './components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Hello /> {/* Using the Hello component */}
      <Greet /> {/* Using the Hello component */}
      <QuoteOfTheDay /> {/* Using the Hello component */}
      <SyntaxHtmlJsx />
      <GreetProp name="Alice" age= {20}/>
      <GreetDefaultProp />
      <h1>useState Example - counter</h1>
      <Counter />
  

      
    </>
  )
}

export default App
