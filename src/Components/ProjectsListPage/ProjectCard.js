import React from 'react'
import './Project.css'
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function ProjectCard(props) {
  const cutDescription = props.description.replace(/^(.{90}[^\s]*).*/, "$1")
  const thisProject = props.project
  const thisItems = props.items
  const deleteClick = props.deleteClick
  return (
    <div className="project-card">
      <h4>{props.title}</h4>
      {props.project.current === true ? <h5 id="current">Current Project</h5> : ""}
      <p>{cutDescription}...</p>
      <Link to={{
        pathname: `/projects/${props.id}`,
        state: {
          project: thisProject,
          items: thisItems,
        }
      }}>Open Project</Link>
    </div>
  )
}
// delete: deleteClick,
// deleteClick: deleteClick
// {`/projects/${props.id}`} project={props.project}
