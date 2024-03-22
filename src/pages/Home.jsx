import { useState } from 'react';
import { Link } from 'react-router-dom';

import mixpanel from "../services/mixpanel";

import reactLogo from '../assets/react.svg';
import '../styles/App.css';
import viteLogo from '/vite.svg';

function Home() {
  const [count, setCount] = useState(0)

  mixpanel.trackPageView({ "Page": "Home" })

  const handleCountClick = () => {
    setCount((count) => count + 1)

    mixpanel.trackEvent('Click', { 'TESTE': "JASHDJSHDJASHDSHAJDHSAJ" });
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleCountClick()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <nav>
        <Link to="/teste1">Teste1</Link> | <Link to="/teste2">Teste2</Link>
      </nav>
    </>
  )
}

export default Home