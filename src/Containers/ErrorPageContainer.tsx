import React from "react";
import { Link } from "react-router-dom";
import ErrorPageMessage from "../Components/ErrorPage/ErrorPageMessage";
// importing image not from build works too... i wonder if that is more efficient than running it in build?
// import RabbitPhoto from "../src/assets/rabbitphoto.jpg";
import RabbitPhoto from "../../build/src/assets/rabbitphoto.jpg";

function ErrorPage() {
  return (
    <>
      <ErrorPageMessage />
      <div id="error-image">
        <div id="error-message">
          <Link to="/">
            <img
              src={RabbitPhoto}
              alt=" <-- Sad Rabbit photo"
              title="Sad Rabbit phot"
              height="300"
            />
          </Link>
        </div>
        <div>
          <h1 id="error-text">
            Click on the Rabbit to get back to the home screen!
          </h1>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
