import "./App.css";
import React, { useState } from "react";
import { Button } from "@material-ui/core";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages);
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  return (
    <div className="App">
      <form>
        <input
          value={input}
          placeholder="Enter your message"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
        {messages.map((message) => {
          return <p>{message}</p>;
        })}
      </form>
    </div>
  );
}

export default App;
