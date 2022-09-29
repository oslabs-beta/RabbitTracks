import e from "express";
import * as React from "react";
import { UserProjectsProps, UserProjectsRows } from '../../types'

export default function UserProjects(props: UserProjectsProps) {
    const { projects } = props;

    const rows : UserProjectsRows = projects.map(el => {
        return {
          user_project_id: el.user_project_id,
          user_id: el.user_id,
          project_id: el.project_id,
          // created_at: el.created_at ? new Date(Number(el.created_at)).toISOString() : ''
          created_at: el.created_at
        }
      });

    return (
        <div>
      {rows}
        </div>
    )
}