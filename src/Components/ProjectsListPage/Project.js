import React, {Component} from 'react'
import './Project.css'
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
        project: {},
    };
  }

  componentDidMount = () => {
    const {project} = this.props.location.state
    this.setState(() => ({project: project}))
    console.log(this.props.location.state)
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="project">
          <h1 className="title">
             {this.state.project.title}
          </h1>
          <div className="description">
             {this.state.project.description}
             <button className="edit-description">Edit Description</button>
          </div>
          <div className="goals-checklist">
          <h3>Goals Checklist</h3>
            <form>
              <div><input type="checkbox" name="item-1" />
              <label for="item-1">Item 1</label></div>
              <div><input type="checkbox" name="item-1" />
              <label for="item-2">Item 2</label></div>
              <div><input type="checkbox" name="item-2" />
              <label for="item-3">Item 3</label></div>
              <div><input type="checkbox" name="item-3" />
              <label for="item-4">Item 4</label></div>
              <div><input type="checkbox" name="item-5" />
              <label for="item-5">Item 5</label></div>
            </form>
            <button className="add-checklist-item">Add Item</button>
          </div>
          <div className="notes">
            <h3>Additional Notes</h3>
            <form>
              <textarea placeholder={this.state.project.features} />
              <input type="submit" value="Save Notes" />
            </form>
          </div>
          <button className="delete-project">Delete This Project</button>
        </div>
      </div>
    )
  }
}
