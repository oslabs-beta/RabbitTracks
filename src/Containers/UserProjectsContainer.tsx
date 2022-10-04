import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";

const UserProjectsContainer = () : JSX.Element => {
  const [projectsList, setProjectsList] = useState([]);

  const getData = async (param : {}) : Promise<void> => {
    console.log("Getting all user projects...");
    try {
      const { data }: { data: [] } = await axios.post("http://localhost:3000/user/get-all-user-projects", 
      param);     
      setProjectsList(data);
      console.log("Successfully got all user projects.");
    } catch (err) {
      console.log(
        "Error while attempting to get all users projects in UserProjectsContainer: ",
        err
      );
    }
  };

  useEffect(() => {
    //Currently, hard-coded, but we need to provide logged-in user_id
    getData({"user_id": "2"});
  }, []);

      return (
      <div>
      <UserProjects projects={projectsList}/>
      </div>
    );
};

export default UserProjectsContainer;