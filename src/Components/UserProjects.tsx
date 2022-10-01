import * as React from "react";
import { UserProjectsProps } from '../../types'

export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;

    const rows: JSX.Element[] = projects.map(el => {
        return (
          <div>
          {/* <p>user_project_id: {el.user_project_id}</p> */}
          {/* <p>user_id: {el.user_id}</p> */}
          {/* project_id: el.project_id,
          created_at: el.created_at */}
          </div>
        )
      });

    return (
        <div>
      {rows}
        </div>
    )
}