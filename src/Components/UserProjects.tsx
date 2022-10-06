import * as React from "react";
import { UserProjectsProps } from '../../types'

export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;

    const rows: JSX.Element[] = projects.map(el => {
        return (
          <div className="projects-container">
            <div className="projects-div">
          <p>Project Name: {el.project_name}</p>
          <p>Project URL: <a href={el.project_url} target="_blank">Click here to go to project</a></p>
          {/* link does not take to the project page directly; does the user needs to be logged into CloudAMQP? */}
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