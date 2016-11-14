import React, { Component } from 'react';
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
      {
        title: "Bussiness Website",
        category: "Web Design"
      },
      {
        title: "Social App",
        category: "Mobile Development"
      },
      {
        title: "E-commerce Shopping Cart",
        category: "Web Design"
      }
    ]})
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
