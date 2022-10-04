import * as React from "react";
import { UserProjectsProps } from '../../types'

export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;

    const rows: JSX.Element[] = projects.map(el => {
        return (
          <div>
          <p>Project Name: {el.project_name}</p>
          <p>Project URL: {el.project_url}</p>
          </div>
        )
      });

    return (
        <div>
      {rows}
        </div>
    )
}