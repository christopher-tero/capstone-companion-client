import React, {Component} from 'react'
import './NewProject.css'

export default class NewProject extends Component {
  constructor(){
    super()

    this.state = {
      title: undefined,
      description: undefined,
      features: undefined,
      user_id: 1,
      current: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newProject = this.state
    this.props.addProject(newProject)
    return this.props.history.push('/projects/');
  }

  handleTitle = (event) => {
    let title = event.target.value
    this.setState({title: title})
  }

  handleDescription = (event) => {
    let description = event.target.value
    this.setState({description: description})
  }

  handleNotes = (event) => {
    let notes = event.target.value
    this.setState({features: notes})
  }

  render() {
    return(
      <div className="container">
        <form className="new-project" onSubmit={this.handleSubmit}>
          <h1>Create a New Project!</h1>
          <div id="project-title">
            <label htmlFor="title">Project Title: </label>
            <input type="text" name="title" onChange={this.handleTitle}/>
          </div>
          <div id="description">
            <label htmlFor="description">Description:</label>
            <textarea name="description" id="description-text" onChange={this.handleDescription}/>
          </div>
          <div id="notes">
            <label htmlFor="notes">Additional Notes</label>
            <textarea name="notes" id="notes-text" onChange={this.handleNotes}/>
          </div>
          <input type="submit" id="submit" />
        </form>
      </div>
    )
  }
}
