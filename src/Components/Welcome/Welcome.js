import React from 'react'
import '../../App.css'
import './Welcome.css'
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function Welcome(props) {
  const currentProject = props.projects.find((project) => {
    return (project.current === true)
  })

  const cutDescription = currentProject.description.replace(/^(.{150}[^\s]*).*/, "$1")

  return(
    <div className="container">
      <div id="capstone-welcome">
        <h1>Welcome to Capstone Companion!</h1>
        <p>Let us help you as you build your projects!</p>
      </div>
      <div className="current-project">
        <h2>Current Project:</h2>
        <div className="current-project-card">
          <h3>{currentProject.title}</h3>
          <Link to={{
            pathname: `/projects/${currentProject.id}`,
            state: {project: currentProject, items: props.items}
          }}>Open Project</Link>
          <p>{cutDescription}...</p>
        </div>
      </div>
    </div>
  )
}
