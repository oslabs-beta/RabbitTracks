import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MessageContainer from "./Containers/MessageContainer";
import UserProjectsContainer from "./Containers/UserProjectsContainer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavAfterLoggedIn from "./Components/NavBar/NavAfterLoggedIn";
import NavLoginPage from "./Components/NavBar/NavLoginPage";
import NavSignupPage from "./Components/NavBar/NavSignupPage";

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/userprojects" element={<UserProjectsContainer />} />
      <Route path="/messages" element={<MessageContainer />} />
    </Routes>
  );
};

export default App;
