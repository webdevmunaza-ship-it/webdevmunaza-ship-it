import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center top-14 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-amber-200 gap-4 shadow-lg px-5 py-4 rounded-3xl">
          
          <button
            onClick={() => setColor("red")}
            className="px-3 py-2 outline-none text-white rounded-3xl bg-red-500 hover:bg-cyan-300"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-3 py-2 outline-none text-white rounded-3xl bg-green-500 hover:bg-blue-950"
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-3 py-2 outline-none text-black rounded-3xl bg-yellow-400 hover:bg-blue-300"
          >
            Yellow
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default App
