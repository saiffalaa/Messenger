import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";
function Message(props) {
  const isUSer = props.userName === props.curName;
  return (
    <div className={`Message ${isUSer && "right"}`}>
      <Card className={isUSer ? "User" : "Guest"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {props.userName}:{props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
