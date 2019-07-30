import React from 'react'
import './Project.css'
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function ProjectCard(props) {
  const cutDescription = props.description.replace(/^(.{90}[^\s]*).*/, "$1")
  const thisProject = props.project
  const thisItems = props.items
  console.log(thisItems)
  return (
    <div className="project-card">
      <h4>{props.title}</h4>
      <p>{cutDescription}...</p>
      <Link to={{
        pathname: `/projects/${props.id}`,
        state: {
          project: thisProject,
          items: thisItems,
        }
      }} items={props.items}>Open Project</Link>
    </div>
  )
}
// {`/projects/${props.id}`} project={props.project}
// <Link to={{
//   pathname: '/tylermcginnis',
//   state: {
//     fromNotifications: true
//   }
// }}>Tyler McGinnis</Link>
