import React from 'react'
import Project from './Project'
import '../../App.css'
import './Project.css'

export default function ProjectsListPage(props) {
  const listProjects = props.projects.map((project) => {
    console.log(project)
    return <Project key={project.id} title={project.title} description={project.description} />
  })

  return (
    <div className="container">
      <h1>List of Projects</h1>
      <div className="card-container">
        {listProjects}
      </div>
    </div>
  )
}
