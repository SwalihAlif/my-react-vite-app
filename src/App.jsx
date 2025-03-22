import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import ShowMessage from './components/toggleMangement'
import RandomUser from './components/RandomUser'
import Home from './components2/Home';
import Counter2 from './components2/Counter';
import RefreshRandomUser from './components2/RefreshRandom';
import FocusInput from './useRef/FocusInput';
import StorePreValue from './useRef/StorePreValue';
import BoxWidth from './useRef/BoxWidth';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Hello /> {/* Using the Hello component */}
//       <Greet /> {/* Using the Hello component */}
//       <QuoteOfTheDay /> {/* Using the Hello component */}
//       <SyntaxHtmlJsx />
//       <GreetProp name="Alice" age= {20}/>
//       <GreetDefaultProp />
//       <h3>useState Example - counter</h3>
//       <Counter />
//       <h3 style={{color: "WindowText"}}>Toggle Message with useState</h3>
//       <ShowMessage />
//       <h1 style={{color: "violet"}}>React useEffect Example - randomuser api</h1>
//       <RandomUser />
      
  

      
//     </>
//   )
// }

function App() {
  return(
    <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/greet">Greet</Link></li>
            <li><Link to="/quote">Quote</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/toggle">Toggle Message</Link></li>
            <li><Link to="/randomuser">Random User</Link></li>
            <li><Link to="/counter2">Conter Heading</Link></li>
            <li><Link to="/randomuser2">Random user with refresh button</Link></li>
            <li><Link to="/focusinput">useRef Example - Focus Input</Link></li>
            <li><Link to="/prevalue">useRef Example - Store previous value</Link></li>
            <li><Link to="/width">useRef Eg: Measure width</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/greet" element={<Greet />} />
          <Route path="/quote" element={<QuoteOfTheDay />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/toggle" element={<ShowMessage />} />
          <Route path="/randomuser" element={<RandomUser />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/randomuser2" element={<RefreshRandomUser />} />
          <Route path="/focusinput" element={<FocusInput />} />
          <Route path="/prevalue" element={<StorePreValue />} />
          <Route path="/width" element={<BoxWidth />} />
        </Routes>
    </Router>
  );
}
export default App
