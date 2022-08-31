// here we will be consuming the message(s) that are passed through the *USERS* DLE...

// send this to Database

// and export to DeadLetterMessage JSX component

var amqp = require("amqplib/callback_api");

amqp.connect(
  "amqps://xhvmtemw:wv7SvO0M_6pC28ICXh5JqrkmAKyj4-XJ@gull.rmq.cloudamqp.com/xhvmtemw",
  function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }

      // theoretically grabbing DLX from user, but hardcoding for now
      const DLX = "DLX2";

      const DLQ = "project_queue";

      // ASSERTING 2nd DEAD LETTER EXCHANGE AND QUEUE

      // theoretically grabbing DLX from user, but hardcoding for now
      channel.assertExchange(DLX, "fanout");
      channel.assertQueue(DLQ, { durable: true });
      channel.bindQueue(DLQ, DLX);

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", DLQ);

      channel.consume(
        "DLQ2",
        function (msg) {
          console.log(" 2nd [x] Received %s", msg.content.toString());
          console.log("msg --> ", msg);
          //   console.log(msg.properties.headers["x-death"]);
          const { fields, properties } = msg;
          const {
            consumerTag,
            deliveryTag,
            redelivered,
            exchange,
            routingKey,
          } = fields;
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

          fetch("/addmessage", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
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
              headers
            }),
          });
        },
        {
          noAck: true,
        }
      );
    });
  }
);
