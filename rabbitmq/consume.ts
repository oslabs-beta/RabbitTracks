import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
import amqp, {
  Connection,
  Channel,
  Message,
  MessageFields,
  MessageProperties,
} from 'amqplib/callback_api';
import { CreateDLXMessage, Properties, Fields } from '../types';
import { Socket } from 'dgram';

export const runConsume = (URL: string, projectID: number) => {
  // Establish client-side socket connection
  const io = require('socket.io-client');
  const socket = io.connect('http://localhost:3000/messages', {
    reconnection: true,
  });

  socket.on('connect', function (socket: Socket) {
    console.log(`Socket connection established in consume file`);
  });

  // Establish connection with user's RabbitMQ instance
  amqp.connect(URL, function (error0: Error, connection: Connection) {
    if (error0) {
      throw error0;
    }

    connection.createChannel(function (error1: Error, channel: Channel) {
      if (error1) {
        throw error1;
      }

      // If hooking into pre-existing RabbitMQ Dead Letter Exchange, update DLExchange to match existing exchange name
      const DLExchange: string = 'RabbitTracks-DLExchange';
      // If multiple users are hooking into the same RabbitMQ instance, but using separate databases, change DLQueue name to be unique for each user
      const DLQueue: string = 'RabbitTracks-DLQueue';

      channel.assertExchange(DLExchange, 'fanout');
      channel.assertQueue(DLQueue, { durable: true });
      channel.bindQueue(DLQueue, DLExchange, '');

      console.log(
        ' [*] Waiting for messages in %s. To exit press CTRL+C',
        DLQueue
      );

      channel.consume(DLQueue, async function (msg: Message | null) {
        const projectId: number = projectID;

        const {
          content,
          fields,
          properties,
        }: {
          content?: Buffer;
          fields?: MessageFields;
          properties?: MessageProperties;
        } = { ...msg };
        const {
          consumerTag,
          deliveryTag,
          redelivered,
          exchange,
          routingKey,
        }: Fields = { ...fields };
        const {
          contentType,
          contentEncoding,
          headers,
          deliveryMode,
          priority,
          correlationId,
          replyTo,
          expiration,
          messageId,
          timestamp,
          type,
          userId,
          appId,
          clusterId,
        }: Properties = { ...properties };

        if (content) console.log(' [x] Received %s', content.toString());

        // Add consumed messages to database
        await axios
          .post<CreateDLXMessage>(
            'http://localhost:8080/messages/add-message',
            {
              consumerTag,
              deliveryTag,
              redelivered,
              exchange,
              routingKey,
              contentType,
              contentEncoding,
              deliveryMode,
              priority,
              correlationId,
              replyTo,
              expiration,
              messageId,
              timestamp,
              type,
              userId,
              appId,
              clusterId,
              headers,
              projectId,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          .then((data) => {
            if (msg) channel.ack(msg);

            // Send notification to server-side socket to notify MessageContainer to grab and render newly stored messages
            socket.emit('message-added', () =>
              console.log(`'message-added' event emitted by consumer`)
            );
          })
          .catch((err: Error) => {
            console.log('Axios error when attempting to add message... ', err);
          });
      });
    });
  });
};
