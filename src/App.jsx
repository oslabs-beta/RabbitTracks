import React from "react";
// import { render } from 'react-dom';
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MessageContainer from "./Containers/MessageContainer";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MessageContainer />} />
    </Routes>
  );
};

export default App;
