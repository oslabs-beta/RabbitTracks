import * as React from "react";

const DeadLetterMessage = (props) => {
  const { message } = props;
  const {
    message_id,
    project_id,
    created_at,
    consumertag,
    deliverytag,
    redelivered,
    exchange,
    routingKey,
    contenttype,
    contentencoding,
    correlationid,
    replyto,
    expiration,
    messageid,
  } = message;

  return (
    <div className="dead-letter-message">
      <hr></hr>
      Message ID: {message_id}? Or {messageid}?<br></br>
      Project ID: {project_id}
      <br></br>
      Created At: {created_at}
      <br></br>
      Consumer Tag: {consumertag}
      <br></br>
      Delivery Tag: {deliverytag}
      <br></br>
      Redelivered: {redelivered}
      <br></br>
      Exchange: {exchange}
      <br></br>
      Routing Key: {routingKey}
      <br></br>
      Content Type: {contenttype}
      <br></br>
      Content Encoding: {contentencoding}
      <br></br>
      Correlation ID: {correlationid}
      <br></br>
      Reply To: {replyto}
      <br></br>
      Expiration: {expiration}
      <br></br>
      <hr></hr>
    </div>
  );
};

export default DeadLetterMessage;
