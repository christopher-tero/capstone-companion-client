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
    const putUrl = url + "/projects/" + this.state.project.id
    fetch(putUrl, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNotes)
    })
      .then(response => response.json())
      .then(this.fetchData)
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

  additionalNotes = ""

  handleChange = (event) => {
    this.additionalNotes = event.target.value
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // let projectDescription = {...this.state.project}
    // console.log(projectDescription.description)
    // projectDescription.description = this.additionalNotes
    // console.log(projectDescription.description)
    // this.setState({projectDescription})
    this.setState({ project: { ...this.state.project, description: this.additionalNotes} });
    console.log(this.state.project)
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
          <form onSubmit={this.handleSubmit}>
            <textarea placeholder={this.state.project.features} onChange={this.handleChange} />
            <input type="submit" value="Save Notes" />
          </form>
        </div>
        <button className="delete-project">Delete This Project</button>
      </div>
    )
  }
}
