import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";

const UserProjectsContainer = () : JSX.Element => {
  const [projectsList, setProjectsList] = useState([]);

  const getData = async () : Promise<void> => {
    console.log("Getting all user projects...");
    try {
      const { data }: { data: [] } = await axios.get("/user/get-all-user-projects");     
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
    getData();
  }, []);

      return (
      <div>
      <UserProjects projects={projectsList}/>
      </div>
    );
};

export default UserProjectsContainer;
