import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import DeadLetterMessage from "../Components/DeadLetterMessage";

const MessageContainer = () => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  const getData = async () => {
    console.log("Getting all messages...");
    try {
      const { data } = await axios.get("/messages/get-all-messages");
      setDeadLetterMessages(data);
      console.log("Successfully got all messages.");
    } catch (err) {
      console.log(
        "Error while attempting to get all messages in MessageContainer: ",
        err
      );
    }
  };

  // Need to handle how to 'live-update' messages on screen without infinite loop - Jerikko
  // Look into subscriptions? useContext?
  useEffect(() => {
    getData();
  }, []);

  // To make each message clickable:
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
