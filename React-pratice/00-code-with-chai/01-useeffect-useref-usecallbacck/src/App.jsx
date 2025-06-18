import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]<>?/.,~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md shadow-lg rounded-lg p-6 bg-gray-800 text-orange-400">
        <h2 className="text-2xl font-bold text-center mb-4">Password Generator</h2>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 rounded-l bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              className="w-2/3 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="numberInput" className="font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-5 w-5"
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="charInput" className="font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-5 w-5"
            />
          </div>
        </div>

        <button
          onClick={passwordGenerator}
          className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
