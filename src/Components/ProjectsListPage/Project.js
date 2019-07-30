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

  handleEdit = (event) => {
    // let description = document.querySelector(".description")
    // description.innerText = ""
    // let editDescription = document.createElement("textarea")
    // let changeButton = document.createElement("button")
    // editDescription.className = "description-text"
    // editDescription.value = this.state.project.description
    // changeButton.textContent = "Change Description"
    //
    // description.appendChild(editDescription)
    // description.appendChild(changeButton)
  }

  handleDelete = (event) => {
    const projectUrl = url + "/projects/" + this.state.project.id
    fetch(projectUrl, {method: "DELETE"})
      .then(this.props.fetchData)
    return this.props.history.push('/home/');
  }

  additionalNotes = ""

  handleChange = (event) => {
    this.additionalNotes = event.target.value
  }

  handleNotesSubmit = (event) => {
    event.preventDefault();
    this.setState({ project: { ...this.state.project, features: this.additionalNotes} });
    let newNotes = this.state.project
    console.log(newNotes)
    this.editNotes(newNotes);
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
            <button className="edit-description" onClick={this.handleEdit}>Edit Description</button>
          </div>
          <div id="change-description">
            <textarea placeholder={this.state.project.description} />
            <button className="edit-description" onclick={this.handleEdit}>Change Description</button>
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
