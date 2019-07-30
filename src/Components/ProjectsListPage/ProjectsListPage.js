import React, {Component} from 'react'
import ProjectCard from './ProjectCard'
import '../../App.css'
import './Project.css'

export default class ProjectsListPage extends Component {
  constructor(props) {
    super(props)
  }

  listProjects = () => this.props.projects.map((project) => {
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
    const project = this.props.projects.find(project => project.id == id)
    this.props.setEditedProject(project)
    // console.log(this.state)
  }


  render() {
    return (
      <div className="container">
        <h1>List of Projects</h1>
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
