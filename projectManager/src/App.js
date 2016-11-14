import React, { Component } from 'react';
import Projects from './components/projects'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: [{
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
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>This is my App</h1>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
