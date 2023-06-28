// This container represents an error page
// It displays an error message, an image, and a link to navigate back to the home screen

import React, { lazy } from "react";
import { Link } from "react-router-dom";
// import ErrorPageMessage from "../Components/ErrorPage/ErrorPageMessage";
const ErrorPageMessage = lazy(() => import("../Components/ErrorPage/ErrorPageMessage"));
import RabbitPhoto from "../assets/images/rabbitphoto.jpg";
// const RabbitPhoto = lazy(() => import("../assets/images/rabbitphoto.jpg"));

export default function ErrorPage() {
  return (
    <>
      <ErrorPageMessage />
      <div id="error-image">
        <div id="error-message">
          <Link to="/userprojects">
            <img
              src={RabbitPhoto}
              alt=" <-- Sad Rabbit photo"
              title="Sad Rabbit photo"
              height="300"
              loading="lazy"
            />
          </Link>
        </div>
        <div>
          <h1 id="error-text">
            <b>Click on the Rabbit to get back to the home screen!</b>
          </h1>
        </div>
      </div>
    </>
  );
}
