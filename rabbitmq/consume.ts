// here we will be consuming the message(s) that are passed through the *USERS* DLE...

// send this to Database

// and export to DeadLetterMessage JSX component

import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import amqp, {
  Connection,
  Channel,
  Message,
  MessageFields,
  MessageProperties,
} from "amqplib/callback_api";
import { CreateDLXMessage, Properties, Fields } from "../types";

const amqpURL: string =
  "amqps://xhvmtemw:wv7SvO0M_6pC28ICXh5JqrkmAKyj4-XJ@gull.rmq.cloudamqp.com/xhvmtemw";

amqp.connect(amqpURL, function (error0: Error, connection: Connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1: Error, channel: Channel) {
    if (error1) {
      throw error1;
    }

    // Theoretically grabbing OSP-DLExchange **FROM user**, but hardcoding for now
    const DLExchange: string = "OSP-DLExchange";
    const DLQueue: string = "OSP-DLQueue";

    channel.assertExchange(DLExchange, "fanout");
    channel.assertQueue(DLQueue, { durable: true });
    channel.bindQueue(DLQueue, DLExchange, "");

    console.log(
      " [*] Waiting for messages in %s. To exit press CTRL+C",
      DLQueue
    );

    channel.consume(DLQueue, async function (msg: Message | null) {
      // This field will need to be grabbed from the project later instead of hardcoding
      const projectId: number = 1;

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

      if (content) console.log(" [x] Received %s", content.toString());
      console.log("Adding message...");

      await axios
        .post<CreateDLXMessage>(
          "http://localhost:8080/messages/add-message",
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
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          // For some reason, channel.ack(msg) will acknowledge the message, but {noAck: false} doesn't work... Removed {noAck: false} - Jerikko
          if (msg) channel.ack(msg);
          console.log("Successfully added message.");
        })
        .catch((err: Error) => {
          console.log("Axios error when attempting to add message... ", err);
        });
    });
  });
});
