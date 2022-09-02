import React from "react";
// import { render } from 'react-dom';
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MessageContainer from "./Containers/MessageContainer";
import ProjectContainer from "./Containers/ProjectsContainer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectContainer />} />
        <Route exact path="message" element={<MessageContainer />} />
        <Route
          path="/*"
          element={
            <main>
              <p>404 NOT FOUND</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default App;
