import "./App.css";
import React, { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const sendMessage = (e) => {
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <input
        value={input}
        placeholder="Enter your message"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
