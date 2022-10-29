import * as React from "react";
import { UserProjectsProps } from '../../types'
import MessageContainer from "../Containers/MessageContainer";
import { useNavigate } from "react-router-dom"


export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;    

    let navigate = useNavigate() 
    const handleClickGetMessages = (projectID : Number) => {
      navigate("/messages", {state: {projectID: projectID}})
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