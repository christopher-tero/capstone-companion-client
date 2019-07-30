import React, {Component} from 'react';
import ProjectsListPage from './Components/ProjectsListPage/ProjectsListPage'
import Project from './Components/ProjectsListPage/Project'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Welcome from './Components/Welcome/Welcome'
import Resources from './Components/Resources/Resources'
import Login from './Components/Login/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
const url = "http://localhost:3000/"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: undefined,
      items: undefined,
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  fetchData = () => {
    fetch(url + "projects")
      .then(response => response.json())
      .then(result => this.setState({projects: result}))
      .catch(error => console.error(error))
    fetch(url + "items")
      .then(response => response.json())
      .then(result => this.setState({items: result}))
      .catch(error => console.error(error))
  }
  // <Route path="/projects" exact component={this.state.items ? (this.state.projects ? (props) => <ProjectsListPage {...props} projects={this.state.projects} items={this.state.items} fetchData={this.fetchData} /> : "") : ""} />

  deleteProject = (id) => {
    const filteredProjects = this.state.projects.filter(project => project.id != id)
    this.setState({projects: filteredProjects})
    fetch(url + "projects/" + id, {method: "DELETE"})
  }

  editProject = (editedProject) => {
    console.log(editedProject.id)
    const id = editedProject.id
    fetch(url + `projects/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedProject)
    })
      .then(response => response.json())
      .then(this.fetchData)
  }

  setEditedProject = (project) => {
    this.setState({editedProject: project})
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch className="pages">
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={this.state.projects ? (this.state.items ? (props) => <Welcome {...props} projects={this.state.projects} items={this.state.items} fetchData={this.fetchData} /> : "") : ""} />
            <Route path="/projects" exact component={(props) => <ProjectsListPage {...props}
                projects={this.state.projects}
                items={this.state.items}
                delete={this.deleteProject}
                addProject={this.addProject}
                editProject={this.editProject}
                editView={this.state.editProjectView}
                setEditState={this.setEditState}
                setEditedProject={this.setEditedProject}
                editedProject={this.state.editedProject}
              />} />
            <Route path="/projects/:id" component={(props) => <Project {...props} deleteProject={this.deleteProject} editProject={this.editProject} />} />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
