import axios from 'axios';
import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useLocation } from "react-router-dom";
import DataTable from '../Components/DeadLetterMessage';
import { UserMessagesProps } from '../../types';
import NavAfterLoggedIn from '../Components/NavBar/NavAfterLoggedIn';
import { io } from 'socket.io-client';

const MessageContainer = (): JSX.Element => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  const { state } = useLocation();

  const getData = async (): Promise<void> => {
    console.log('Getting all messages...');
    try {
      const { data }: { data: [] } = await axios.post(
        '/messages/get-all-messages',
        { project_id: state.projectID }
      );
      setDeadLetterMessages(data);
      console.log('Successfully got all messages.');
    } catch (err) {
      console.log(
        'Error while attempting to get all messages in MessageContainer: ',
        err
      );
    }
  };
  

  useEffect(() => {
    getData();

  // Establish client-side socket connection on component mount
    const messagesSocket = io('http://localhost:3000/messages');
    messagesSocket.on('connect', () => {
      console.log(`Socket connection established on /messages`)
      messagesSocket.emit('join', 'consume-messages')
    });
    messagesSocket.on('message-added', (callback) => { getData() });
    messagesSocket.on('disconnect', () => console.log('Client side websocket has disconnected'));

    return () => {
      // close socket connection on component unmount
      messagesSocket.disconnect();
    };
  }, []);

  return (
    <>
      <NavAfterLoggedIn />
      <DataTable messages={deadLetterMessages} />
    </>
  );
};

export default MessageContainer;
