import * as React from "react";
import { UserProjectsProps } from '../../types'
import MessageContainer from "../Containers/MessageContainer";
import { useNavigate } from "react-router-dom"


export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;    

    //handleclick event of project url and pass in message container
    let navigate = useNavigate() 
    const getMessages = (project_id : number) => {
      navigate(`/messages/`)
          return (
        <div>
          <MessageContainer projectId={project_id}/>
        </div>
      )
    } 

    const rows: JSX.Element[] = projects.map(el => {
        return (
          <div className="projects-container">
            <div className="projects-div">
          <p>Project Name: {el.project_name}</p>
          {/* <p>Project URL: <a href={el.project_url} target="_blank" onClick={() => getMessages(el.project_id)}>Click here to go to project</a></p> */}
          <button onClick={() => getMessages(el.project_id)}>Click here to go to project</button>
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