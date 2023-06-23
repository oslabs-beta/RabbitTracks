// This container represents a messages page that retrieves and displays dead letter messages for a specific project
// It also establishes a socket connection to receive real-time updates when new messages are added

import axios from "axios";
import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
// import DataTable from '../Components/DeadLetterMessage';
const DataTable = React.lazy(() => import("../Components/DeadLetterMessage"))
// import NavOnMessagesPage from '../Components/NavBar/NavMessagesPage';
const NavOnMessagesPage= React.lazy(() => import("../Components/NavBar/NavMessagesPage"))
import { io } from 'socket.io-client';

const MessageContainer = (): JSX.Element => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  const { state } = useLocation();

  const getData = async (): Promise<void> => {
    try {
      const { data }: { data: [] } = await axios.post(
        "/messages/get-all-messages",
        { project_id: state.projectID }
      );
      setDeadLetterMessages(data);
    } catch (err) {}
  };

  useEffect(() => {
    getData();

    // Establish client-side socket connection on component mount
    const messagesSocket = io("http://localhost:3000/messages");
    messagesSocket.on("connect", () => {
      messagesSocket.emit("join", "consume-messages");
    });
    messagesSocket.on("message-added", (callback) => {
      getData();
    });
    messagesSocket.on("disconnect", () =>
      console.log("Client side websocket has disconnected")
    );

    return () => {
      // close socket connection on component unmount
      messagesSocket.disconnect();
    };
  }, []);

  return (
    <>
      <NavOnMessagesPage />
      <DataTable messages={deadLetterMessages} />
    </>
  );
};

export default MessageContainer;
