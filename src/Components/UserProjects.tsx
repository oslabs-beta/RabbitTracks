import * as React from "react";
import { UserProjectsProps } from '../../types'

export default function UserProjects(props: UserProjectsProps) {
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