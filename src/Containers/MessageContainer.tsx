import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import DataTable from '../Components/DeadLetterMessage';
import { UserMessagesProps } from '../../types';
import NavAfterLoggedIn from '../Components/NavBar/NavAfterLoggedIn';
import { io } from 'socket.io-client';

const MessageContainer = (props: UserMessagesProps): JSX.Element => {
  const { projectId } = props;
  const [deadLetterMessages, setDeadLetterMessages] = useState([]);

  // establish socket connection
  const messagesSocket = io('http://localhost:4000/messages');
  messagesSocket.on('connect', () => console.log(`I've connected!!`));
  messagesSocket.on('data added', (callback) => {
    getData();
  });


  const getData = async (): Promise<void> => {
    console.log('Getting all messages...');
    try {
      const { data }: { data: [] } = await axios.post(
        '/messages/get-all-messages',
        { project_id: '1' }
      ); //hard-coded project_id until figure out why props not working
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
