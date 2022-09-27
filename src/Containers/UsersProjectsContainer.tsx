import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UsersProjects from "../Components/UsersProjects";

const UsersProjectsContainer = () => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      console.log("Getting all users projects...");
      try {
        const { data } = await axios.get("/placeholder for users projects link");
        setProjectsList(data);
        console.log("Successfully got all users projects.");
      } catch (err) {
        console.log(
          "Error while attempting to get all users projects in UsersProjectsContainer: ",
          err
        );
      }
    };

    getData();
  }, []);

    return (
      <UsersProjects projects={projectsList}/>
    );
};

export default UsersProjectsContainer;