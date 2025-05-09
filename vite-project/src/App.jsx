import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [light, setLight] = useState('OFF')

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === 'OFF' ? 'ON' : 'OFF')
          }}
        >
          {light === 'OFF' ? 'Turn ON' : 'Turn OFF'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default App
