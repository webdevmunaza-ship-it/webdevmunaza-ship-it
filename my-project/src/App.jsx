import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Buttons - bottom center */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white/80 backdrop-blur-md gap-4 shadow-lg px-6 py-4 rounded-full">
          
          <button
            onClick={() => setColor("red")}
            className="px-6 py-2 text-white font-semibold rounded-full bg-red-500 hover:bg-red-600 transition shadow-md"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-6 py-2 text-white font-semibold rounded-full bg-green-500 hover:bg-green-600 transition shadow-md"
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-6 py-2 text-black font-semibold rounded-full bg-yellow-400 hover:bg-yellow-500 transition shadow-md"
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-6 py-2 text-white font-semibold rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-md"
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="px-6 py-2 text-white font-semibold rounded-full bg-purple-500 hover:bg-purple-600 transition shadow-md"
          >
            Purple
          </button>
        </div>
      </div>
    </div>
    

  );
}

export default App;
