// here we will be consuming the message(s) that are passed through the *USERS* DLE...

// send this to Database

// and export to DeadLetterMessage JSX component
require("dotenv").config();
const axios = require("axios");
var amqp = require("amqplib/callback_api");

amqp.connect(
  process.env.RABBIT_URI,
  function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      // theoretically grabbing DLX from user, but hardcoding for now
      const DLExchange = "OSP-DLExchange";
      const DLQueue = "OSP-DLQueue";


      channel.assertExchange(DLExchange, "fanout");
      channel.assertQueue(DLQueue, { durable: true });
      channel.bindQueue(DLQueue, DLExchange);

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", DLQueue);

      channel.consume(DLQueue, async function (msg) {
        console.log(" 2nd [x] Received %s", msg.content.toString());

        // this field will need to be grabbed from the project later instead of hardcoding
        const projectId = 1;

        const { fields, properties } = msg;
        const { consumerTag, deliveryTag, redelivered, exchange, routingKey } =
          fields;
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
        } = properties;

        console.log("Adding message...");

        await axios
          .post(
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
            console.log("Successfully added message.");
          })
          .catch((err) => {
            console.log("Axios error when attempting to add message... ", err);
          }),
          {
            noAck: false,
          };
      });
    });
  }
);
