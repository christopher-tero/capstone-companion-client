import React from 'react'
import ProjectCard from './ProjectCard'
import '../../App.css'
import './Project.css'

export default function ProjectsListPage(props) {
  const listProjects = props.projects.map((project) => {
    return <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      id={project.id}
      project={project}
      items={props.items}
      fetchData={props.fetchData}
    />
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
