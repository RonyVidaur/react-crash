import React, { Component } from 'react'
import uuid from 'uuid'
import Projects from './components/projects'
import AddProject from './components/add-project'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({projects:[
      { id:uuid.v4(),
        title: "Bussiness Website",
        category: "Web Design"
      },
      { id:uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      },
      { id:uuid.v4(),
        title: "E-commerce Shopping Cart",
        category: "Web Design"
      }
    ]})
  }

  handleAddProject(project){
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects:projects})
  }
  handleDeleteProject(id){
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({projects:projects})
  }
  render() {
    return (
      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
