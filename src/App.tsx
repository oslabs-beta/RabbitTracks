import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MessageContainer from "./Containers/MessageContainer";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MessageContainer />} />
    </Routes>
  );
};

export default App;
