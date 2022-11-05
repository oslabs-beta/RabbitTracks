import * as React from "react";
import { UserProjectsProps } from '../../types'
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function UserProjects(props: UserProjectsProps) : JSX.Element {
    const { projectsList } = props;    

    let navigate = useNavigate() 

    // can move up into UserProjectsContainer in the future to separate display and logical components
    const handleClickGetMessages = async (projectID : Number) => {
      navigate("/messages", {state: {projectID: projectID}});

      await axios.post('/messages/run-consume', {
        projectID
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .catch((err: Error) => {
        console.log("Error when running consume: " + err)
      });
    } 

    const rows: JSX.Element[] = projectsList.map((proj, i) => {
        return (
          <div className="projects-container" key={i}>
            <div className="projects-div">
          <p>{proj.project_name}</p>
          <button className="messages-btn" onClick={() => handleClickGetMessages(proj.project_id)}>Click here to see failed messages</button>
          </div>
          </div>
        )
      });

    return (
        <div>
      {rows}
        </div>
    )
}