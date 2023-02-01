import { useState } from "react";
import Cities from "./components/Cities";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div>
        <label htmlFor="search" className=" font-semibold">
          Ara:
        </label>
        <input
          onKeyDown={(c) => {
            if (c.keyCode === 32) {
              c.preventDefault();
            }
          }}
          tabIndex={1}
          id="search"
          autoFocus
          type="search"
          className="border-violet-800 border-2 rounded outline-none font-semibold w-60 m-3
          px-2 py-1"
          onChange={(val) => setText(val.target.value)}
        />
      </div>
      <ul className="w-full">
        <Cities SearchText={text} />
      </ul>
      <div>
        <h3>Produced by Kadir</h3>
      </div>
    </div>
  );
}

export default App;
