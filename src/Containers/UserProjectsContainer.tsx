import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import UserProjects from "../Components/UserProjects";

const UserProjectsContainer = () : JSX.Element => {
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getData = async () : Promise<void> => {
      console.log("Getting all user projects...");
      try {
        const { data }: { data: [] } = await axios.post("http://localhost:3000/user/get-all-user-projects", 
        { "user_id": "2"});
        setProjectsList(data);
        console.log(data)
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

  //also need to fetch data from projects table by project_id
  //can be one query with join

    return (
      <div>
      <div>User Projects Container</div>
      {/* {projectsList.map(project => 
        <p>{project.project_id}</p>)} */}
      <UserProjects projects={projectsList}/>
      </div>
    );
};

export default UserProjectsContainer;