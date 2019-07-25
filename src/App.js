import React, {Component} from 'react';
import ProjectsListPage from './Components/ProjectsListPage/ProjectsListPage'
import Project from './Components/ProjectsListPage/Project'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Welcome from './Components/Welcome/Welcome'
import Resources from './Components/Resources/Resources'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
const url = "http://localhost:3000/"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: undefined,
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
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/projects" exact component={(props) => <ProjectsListPage {...props} projects={this.state.projects} />} />
            <Route path="/projects/:id" component={Project} />
            <Route path="/resources" component={Resources} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}



// <Route path="/players/" component={(props) => <PlayerList {...props}
// players={this.state.players}
// delete={this.deletePerson}
// addPerson={this.addPerson}
// editPlayer={this.editPlayer}
// editView={this.state.editPlayerView}
// setEditState={this.setEditState}
// setEditedPlayer={this.setEditedPlayer}
// editedPlayer={this.state.editedPlayer}
// />}
// />
// <Route path="/past-games/" component={(props) => <GameHistoryList {...props} games={this.state.games} />} />
// <Route path="/past-tournaments/" component={(props) => <TournamentHistoryList {...props} tournaments={this.state.tournaments} />} />
// <Route path="/new-game/" component={SingleGame} />
// <Route path="/new-tournament/" component={NewTournamentForm} />

// <Footer />
