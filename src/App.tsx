import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
const MessageContainer = React.lazy(() => import("./Containers/MessageContainer"));
const UserProjectsContainer = React.lazy(() => import("./Containers/UserProjectsContainer"));
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ErrorPage from "./Containers/ErrorPageContainer";
// import path from "path";

// The App component contains the structure of the application, utilizing React Router to organize which components are displayed
//  for which URL path
const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/signup/cat" element={<ErrorPage />} /> */}
      <Route path="/userprojects" element={<UserProjectsContainer />} />
      <Route path="/messages" element={<MessageContainer />} />
    </Routes>
  );
};

export default App;
