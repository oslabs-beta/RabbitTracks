import axios from "axios";
import * as React from "react";
import { useEffect, useState, MouseEvent, MouseEventHandler } from "react";
import UserProjects from "../Components/UserProjects";
import { Link } from "react-router-dom";
import AddProjectModal from "../Components/AddProjectModal";


const UserProjectsContainer = () : JSX.Element => {



  const [show, setShow] = useState(false);
  const [projNameErr, setNameErr] = useState(false);
  const [projURLErr, setURLErr] = useState(false);
  const onOpen: MouseEventHandler = (e: MouseEvent) => setShow(true);
  const onClose = (): void => {
    setShow(false)
    setNameErr(false)
    setURLErr(false)
  }
  const onSave = async (): Promise<void> => {
    const projectName = (document.getElementById('project-name') as HTMLInputElement).value
    const projectURL = (document.getElementById('project-url') as HTMLInputElement).value
    if (projectName && projectURL) {
      await axios
        .post(
          "/usersprojects/addproject",
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
          console.log("Successfully added project!");
          setShow(false)
        })
        .catch((err: Error) => {
          console.log("Axios error when attempting to add project... ", err);
        });
    }
    else {
      if (!projectName) setNameErr(true);
      if (!projectURL) setURLErr(true);
    }
  };

    return (
      <div>
        <div>User Projects Container</div>
        <Link to="/messages">To Messages</Link>

        <div>
          <button onClick={onOpen}>Add Project</button>
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
      </div>
    );
};

export default UserProjectsContainer;