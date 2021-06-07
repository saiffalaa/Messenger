import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((Snapshot) => {
        setMessages(Snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  useEffect(() => {
    setName(prompt("Enter your name"));
  }, []);
  console.log(name);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: input,
      userName: name,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

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
