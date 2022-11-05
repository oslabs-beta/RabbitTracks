import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import DeadLetterMessages from '../Components/DeadLetterMessages';
import NavOnMessagesPage from '../Components/NavBar/NavMessagesPage';
import { io } from 'socket.io-client';

const MessageContainer = (): JSX.Element => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  const { state } = useLocation();

  const getProjectDeadLetterMessages = async (): Promise<void> => {
    try {
      const { data }: { data: [] } = await axios.post(
        '/messages/get-all-messages',
        { project_id: state.projectID }
      );
      setDeadLetterMessages(data);
    } catch (err) {
      console.log("Error occurred while trying to get all project dead letter messages: " + err);
    }
  };
  

  useEffect(() => {
    getProjectDeadLetterMessages();

  // Establish client-side socket connection on component mount
    const messagesSocket = io('http://localhost:3000/messages');
    messagesSocket.on('connect', () => {
      messagesSocket.emit('join room', 'consume-messages')
    });
    messagesSocket.on('message-added', (callback) => { getProjectDeadLetterMessages() });

    return () => {
      // close socket connection on component unmount
      messagesSocket.disconnect();
    };
  }, []);

  return (
    <>
      <NavOnMessagesPage />
      <DeadLetterMessages messages={deadLetterMessages} />
    </>
  );
};

export default MessageContainer;
