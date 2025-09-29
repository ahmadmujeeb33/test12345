import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="flex aspect-square bg-black" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="bg-black">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="flex bg-black max-h-[100px] overflow-scroll items-center justify-center font-medium text-white aspect-square">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
