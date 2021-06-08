import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input } from "@material-ui/core";
import FlipMove from "react-flip-move";
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
        setMessages(
          Snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    const user = prompt("Enter your name");
    setName(user ? user : "Guest");
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
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            value={input}
            placeholder="Enter your message..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="app__button"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>
      <FlipMove className="app__chat">
        {messages.map(({ id, message }) => {
          return (
            <Message
              key={id}
              userName={message.userName}
              text={message.text}
              curName={name}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default App;
