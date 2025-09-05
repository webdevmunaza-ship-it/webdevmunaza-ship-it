import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed] = useState(false)
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (NumberAllowed) str += "1234567890"
    if (CharAllowed) str += "!@#$%^&*"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, NumberAllowed, CharAllowed])

  const copyPasswordtoClipboard = useCallback(() => {
    if (passwordref.current) {
      passwordref.current.select()
      navigator.clipboard.writeText(password)
    }
  }, [password])

  useEffect(() => {
    PasswordGenerator()
  }, [PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 bg-gray-800">
        <h1 className="text-center text-white p-4 rounded-lg">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            ref={passwordref}
            className="outline-none w-full bg-white text-orange-800 py-2 px-3"
            type="text"
            value={password}
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyPasswordtoClipboard}
            className="bg-blue-500 py-2 px-3 text-white"
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 items-center mb-3">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className="text-orange-500">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2 mb-2">
          <input
            type="checkbox"
            checked={NumberAllowed}
            id="numberinput"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label className="text-orange-500" htmlFor="numberinput">
            Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={CharAllowed}
            id="Characterinput"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label className="text-orange-500" htmlFor="Characterinput">
            Characters
          </label>
        </div>
      </div>
    </>
  )
}

export default App
