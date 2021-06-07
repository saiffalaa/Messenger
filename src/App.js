import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ userName: "hh", text: "hey" }]);
  const [name, setName] = useState("");
  useEffect(() => {
    setName(prompt("Enter your name"));
  }, []);
  console.log(name);
  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { userName: name, text: input }]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>Welcome {name}</h1>
      <form>
        <FormControl>
          <InputLabel>Send message</InputLabel>

          <Input
            value={input}
            placeholder="Enter your message"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => {
        return (
          <Message
            userName={message.userName}
            text={message.text}
            curName={name}
          />
        );
      })}
    </div>
  );
}

export default App;
