import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MessageContainer from "./Containers/MessageContainer";
import UserProjectsContainer from "./Containers/UserProjectsContainer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavAfterLoggedIn from "./Components/NavBar/NavAfterLoggedIn";
import NavLoginPage from "./Components/NavBar/NavLoginPage";
import NavSignupPage from "./Components/NavBar/NavSignupPage";
import ErrorPage from "./Containers/ErrorPageContainer";
import { Link } from "react-router-dom";
import path from "path";

//errorPage path only works if first parameter after / does not match... ie if /signup/alkdfjas, it does not work currently

//attempt to implement an if-else here?

import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

// connect to the server
socket.on('connect', () => console.log(`I've connected!!`))
socket.on('data received', (callback) => callback('got data'))
socket.on('data added', (callback) => callback())


const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/cat" element={<ErrorPage />} />
      <Route path="/userprojects" element={<UserProjectsContainer />} />
      <Route path="/messages" element={<MessageContainer />} />
    </Routes>
  );
};

export default App;
