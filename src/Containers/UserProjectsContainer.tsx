import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";
import { Link } from "react-router-dom";

const UserProjectsContainer = () : JSX.Element => {

    return (
      <div>
        <div>User Projects Container</div>
        <Link to="/messages">To Messages</Link>
      </div>
    );
};

export default UserProjectsContainer;