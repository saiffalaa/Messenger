import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";
const Message = forwardRef((props, ref) => {
  const isUSer = props.userName === props.curName;
  return (
    <div ref={ref} className={`Message ${isUSer && "right"}`}>
      <Card className={isUSer ? "User" : "Guest"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {`${!isUSer ? props.userName + ": " : ""}`}
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
