import React, {Component} from 'react'
import Goals from './Goals'
import './Project.css'
const url = "http://localhost:3000/"

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        project: {},
        items: {},
    };
  }

  componentDidMount = () => {
    const {project} = this.props.location.state
    this.setState(() => ({project: project}))
    const {items} = this.props.location.state
    this.setState(() => ({items: items}))
  }

  editNotes = (newNotes) => {
    const projectUrl = url + "/projects/" + newNotes.id
    fetch(projectUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNotes)
    })
      .then(response => response.json())
      .then(this.props.fetchData)
  }

  handleDelete = (event) => {
    this.props.deleteProject(this.state.project.id)
    return this.props.history.push('/home/');
  }

  handleChange = (event) => {
    let additionalNotes = event.target.value
    this.setState({ project: { ...this.state.project, features: additionalNotes} })
    console.log(additionalNotes)
  }

  handleNotesSubmit = (event) => {
    event.preventDefault(event)
    const editProject = this.state.project
    this.props.editProject(editProject)
  }

  render() {
    return (
      <div className="container project">
        <h1 className="title">
           {this.state.project.title}
        </h1>
        <div className="description">
          <div id="display-description">
            {this.state.project.description}
          </div>
        </div>
        { this.state.items
          ? (this.state.project ? <Goals items={this.state.items} project={this.state.project}/> : "")
          : ""
        }
        <div className="notes">
          <h3>Additional Notes</h3>
          <form onSubmit={this.handleNotesSubmit}>
            <textarea placeholder={this.state.project.features} onChange={this.handleChange} />
            <input type="submit" value="Save Notes" />
          </form>
        </div>
        <button className="delete-project" onClick={this.handleDelete}>Delete This Project</button>
      </div>
    )
  }
}
