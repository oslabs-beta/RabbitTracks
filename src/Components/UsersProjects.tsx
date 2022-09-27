import * as React from "react";
import { UsersProjectsProps } from '../../types'

export default function UsersProjects(props: UsersProjectsProps) {
    const { projects } = props;

    //need rows type
    const rows = projects.map(el => {
        return {
          user_id: el.user_id,
          project_id: el.project_id,
          created_at: el.timestamp ? new Date(Number(el.timestamp)).toISOString() : ''
        }
      });

    return (
        <div>

        </div>
    )
}