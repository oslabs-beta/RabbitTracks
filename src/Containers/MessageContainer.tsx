import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import DataTable from "../Components/DeadLetterMessage";


const MessageContainer = () => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);


  // Need to handle how to 'live-update' messages on screen without infinite loop - Jerikko
  // Look into websockets? socket.io? subscriptions? useContext? Polling? setInterval? Want to avoid screen refreshes probably...
  // https://stackoverflow.com/questions/53871327/update-react-data-when-mysql-data-changes
  useEffect(() => {
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

    getData();
  }, []);

  // To make each message clickable:
  // const handleOnClick = () => {

  // }

    return (
      <DataTable messages={deadLetterMessages}/>
    );
};

export default MessageContainer;