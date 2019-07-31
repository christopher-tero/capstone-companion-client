import React, {Component} from 'react'
import ProjectCard from './ProjectCard'
import '../../App.css'
import './Project.css'

export default class ProjectsListPage extends Component {

  sortProjects = this.props.projects.sort((a, b) => a.id - b.id)

  listProjects = () => this.sortProjects.map((project) => {
    return <ProjectCard
      key={project.id}
      title={project.title}
      description={project.description}
      id={project.id}
      project={project}
      items={this.props.items}
      deleteClick={() => this.handleDelete(project.id)}
      editClick={() => this.handleEdit(project.id)}
    />
  })

  handleDelete = (id) => {
    this.props.delete(id)
  }

  handleEdit = (id) => {
    this.props.setEditState()
    const project = this.props.projects.find(project => project.id === id)
    this.props.setEditedProject(project)
  }

  handleAdd = (event) => {
    return this.props.history.push('/new_project/');
    // <Link to="/new_project/" />
  }

  render() {
    return (
      <div className="container">
        <h1 id="list-of-projects">List of Projects</h1>
        <button id="add-project" onClick={this.handleAdd}>Add Project!</button>
        <div className="card-container">
          {this.props.projects
            ? this.listProjects()
            : ""
          }
        </div>
      </div>
    )
  }
}
