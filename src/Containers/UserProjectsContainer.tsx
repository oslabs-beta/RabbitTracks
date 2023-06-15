// This container represents a user projects page
// It allows users to view their projects, add new projects, and interact with them

import axios from "axios";
import * as React from "react";
import { useEffect, useState, MouseEvent, MouseEventHandler } from "react";
import UserProjects from "../Components/UserProjects";
import AddProjectModal from "../Components/AddProjectModal";
import NavAfterLoggedIn from "../Components/NavBar/NavAfterLoggedIn";

const UserProjectsContainer = (): JSX.Element => {
  const [projectsList, setProjectsList] = useState([]);
  const [show, setShow] = useState(false);
  const [projNameErr, setNameErr] = useState(false);
  const [projURLErr, setURLErr] = useState(false);

  const getData = async (): Promise<void> => {
    try {
      const { data }: { data: [] } = await axios.get(
        "/user/get-all-user-projects"
      );
      setProjectsList(data);
    } catch (err) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const onOpen: MouseEventHandler = (e: MouseEvent) => setShow(true);
  const onClose = (): void => {
    setShow(false);
    setNameErr(false);
    setURLErr(false);
  };
  const onSave = async (): Promise<void> => {
    const projectName = (
      document.getElementById("project-name") as HTMLInputElement
    ).value;
    const projectURL = (
      document.getElementById("project-url") as HTMLInputElement
    ).value;

    if (projectName && projectURL) {
      await axios
        .post(
          "/user/addproject",
          {
            projectName,
            projectURL,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          setShow(false);
          getData();
        })
        .catch((err: Error) => {});
    } else {
      if (!projectName) setNameErr(true);
      if (!projectURL) setURLErr(true);
    }
  };

  return (
    <div>
      <div>
        <NavAfterLoggedIn />
      </div>
      <div>
        <button className="add-project-btn" onClick={onOpen}>
          Add Project
        </button>
        <AddProjectModal
          isShown={show}
          handleClose={onClose}
          handleSave={onSave}
          headerText="Add New Project"
          setNameErr={setNameErr}
          setURLErr={setURLErr}
          projectNameError={projNameErr}
          projectURLError={projURLErr}
        />
      </div>
      <div>
        <UserProjects projects={projectsList} />
      </div>
    </div>
  );
};

export default UserProjectsContainer;
