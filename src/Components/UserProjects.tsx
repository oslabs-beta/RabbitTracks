import * as React from "react";
import { UserProjectsProps } from '../../types'
import { useNavigate } from "react-router-dom"
import axios from "axios";


export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;    

    let navigate = useNavigate() 
    const handleClickGetMessages = (projectID : Number) => {
      navigate("/messages", {state: {projectID: projectID}});

      axios.post('/messages/run-consume', {
        projectID
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        console.log("Successfully started consumer");
      })
      .catch((err: Error) => {
        console.log("Axios error when attempting to start consumer... ", err);
      });
    } 

    const rows: JSX.Element[] = projects.map((el, i) => {
        return (
          <div className="projects-container" key={i}>
            <div className="projects-div">
          <p>{el.project_name}</p>
          <div>
          <button className="messages-btn" onClick={() => handleClickGetMessages(el.project_id)}>Click here to see messages</button>
          </div>
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