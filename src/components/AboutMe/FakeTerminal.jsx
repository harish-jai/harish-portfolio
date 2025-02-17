import React, { useState } from "react";
import AboutMeJSON from "./AboutMeJSON";
import "./FakeTerminal.css";

const FakeTerminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleCommand = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === "about me") {
      setOutput(<AboutMeJSON />);
    } else {
      setOutput(<p className="text-red-500">Unknown command. Try "about me"</p>);
    }
    setInput("");
  };

  return (
    <div className="fake-terminal">
      <p className="hint">(Hint: Type "about me" and press Enter)</p>
      <div className="input-container">
        <span className="text-green-400">$</span>
        <form onSubmit={handleCommand} className="w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
          />
        </form>
      </div>
      <div className="output">{output}</div>
    </div>
  );
};

export default FakeTerminal;