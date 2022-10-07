import React from "react";
import { Link } from "react-router-dom";
import ErrorPageMessage from "../Components/ErrorPage/ErrorPageMessage";
// importing image not from build works too... i wonder if that is more efficient than running it in build?
import RabbitPhoto from "../../src/assets/images/rabbitphoto.jpg";
// import RabbitPhoto from "../../build/src/assets/rabbitphoto.jpg";

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
              title="Sad Rabbit phot"
              height="300"
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

// export default ErrorPage;
