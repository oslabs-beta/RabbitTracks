import React from "react";
import { Link } from "react-router-dom";
import ErrorPageMessage from "../Components/ErrorPage/ErrorPageMessage";
import RabbitPhoto from "../../src/assets/images/rabbitphoto.jpg";

export default function ErrorPage() : JSX.Element {
  return (
    <>
      <ErrorPageMessage />
      <div id="error-image">
        <div id="error-message">
          <Link to="/">
            <img
              src={RabbitPhoto}
              alt=" <-- Sad Rabbit photo"
              title="Sad Rabbit photo"
              height="300"
            />
          </Link>
        </div>
        <div>
          <h1 id="error-text">
            <b>Click on the Rabbit to get back to the login screen!</b>
          </h1>
        </div>
      </div>
    </>
  );
}
