import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import DeadLetterMessage from "../Components/DeadLetterMessage";

const MessageContainer = () => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  useEffect(() => {
    console.log("Getting all messages...");
    axios
      .get("/messages/get-all-messages")
      .then((res) => {
        setDeadLetterMessages(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(`Error occured in DeadLetterMessage component: ${err}`);
      });
  }, []);

  //To make each message clickable:
  // const handleOnClick = () => {

  // }

  const messages = deadLetterMessages.map((el) => {
    return (
      <DeadLetterMessage key={el.message_id} message={el}></DeadLetterMessage>
    );
  });

  return <div className="message-container">{messages}</div>;
};

export default MessageContainer;
