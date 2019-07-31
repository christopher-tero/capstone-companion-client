import React, {Component} from 'react'
import Goals from './Goals'
import './Project.css'

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

  handleDelete = (event) => {
    this.props.deleteProject(this.state.project.id)
    return this.props.history.push('/projects/');
  }

  handleChange = (event) => {
    let additionalNotes = event.target.value
    this.setState({ project: { ...this.state.project, features: additionalNotes} })
  }

  handleNotesSubmit = (event) => {
    event.preventDefault(event)
    const editProject = this.state.project
    this.props.editProject(editProject)
  }

// ----- WORKING ON FEATURE ----- //
  // handleCurrent = (event) => {
  //   this.setState({ project: { ...this.state.project, current: true} })
  //   console.log(this.state.project.current)
  //   this.props.setCurrent(this.state.project.id)
  // }

  render() {
    // console.log(this.state.items)
    return (
      <div className="container project">
        <h1 className="title">
           {this.state.project.title}
        </h1>
        <div className="description">
          <div id="display-description">
            {this.state.project.description}
          </div>
          <div id="set-current-button">
            {/*<button id="set-current" onClick={this.handleCurrent}>Set to Current Project</button>*/}
          </div>
        </div>
        { this.state.project
          ? (this.state.project ? <Goals items={this.props.items} project={this.state.project}/> : "")
          : ""
        }
        <div className="notes">
          <h3>Additional Notes</h3>
          <form onSubmit={this.handleNotesSubmit}>
            <textarea value={this.state.project.features} onChange={this.handleChange} />
            <input type="submit" value="Save Notes" />
          </form>
        </div>
        <button className="delete-project" onClick={this.handleDelete}>Delete This Project</button>
      </div>
    )
  }
}
