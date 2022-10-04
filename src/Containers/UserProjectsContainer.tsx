import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";
import NavAfterLoggedIn from "../Components/NavBar/NavAfterLoggedIn";

const UserProjectsContainer = (): JSX.Element => {
  return (
    <>
      <NavAfterLoggedIn />
      <div>User Projects Container</div>
    </>
  );
};

export default UserProjectsContainer;
