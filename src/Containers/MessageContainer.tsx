import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import DataTable from '../Components/DeadLetterMessage';
import { UserMessagesProps } from '../../types';
import NavAfterLoggedIn from '../Components/NavBar/NavAfterLoggedIn';
import { io } from 'socket.io-client';

const MessageContainer = (): JSX.Element => {
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  const { state } = useLocation();

  // establish socket connection
  const messagesSocket = io('http://localhost:4000/messages');
  messagesSocket.on('connect', () => console.log(`Sockets connection established on /messages`));
  messagesSocket.on('data added', (callback) => { getData() });


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
    return () => {
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
