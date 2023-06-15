// This component represents a user's project page
// It displays a list of projects and provides a button to view failed messages for each project

import * as React from "react";
import { UserProjectsProps } from "../../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserProjects(props: UserProjectsProps) {
  const { projects } = props;

  let navigate = useNavigate();

  const handleClickGetMessages = (projectID: Number) => {
    navigate("/messages", { state: { projectID: projectID } });

    axios
      .post(
        "/messages/run-consume",
        {
          projectID,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err: Error) => {});
  };

  const rows: JSX.Element[] = projects.map((el, i) => {
    return (
      <div className="projects-container" key={i}>
        <div className="projects-div">
          <p>{el.project_name}</p>
          <button
            className="messages-btn"
            onClick={() => handleClickGetMessages(el.project_id)}
          >
            Click here to see failed messages
          </button>
        </div>
      </div>
    );
  });

  return <div>{rows}</div>;
}
