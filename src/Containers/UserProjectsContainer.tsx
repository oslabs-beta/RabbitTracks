import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";

const UserProjectsContainer = () => {
  const [projectsList, setProjectsList] = useState([]);

  //will need user_id to fetch data from backend
  useEffect(() => {
    const getData = async () => {
      console.log("Getting all user projects...");
      try {
        const { data } = await axios.get("/placeholder for user projects link");
        setProjectsList(data);
        console.log("Successfully got all user projects.");
      } catch (err) {
        console.log(
          "Error while attempting to get all users projects in UserProjectsContainer: ",
          err
        );
      }
    };

    getData();
  }, []);

    return (
      <UserProjects projects={projectsList}/>
    );
};

export default UserProjectsContainer;