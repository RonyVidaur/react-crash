import React, { Component } from 'react';
import ProjectItem from './project-item'

class Projects extends Component {
  render() {
  let projectItems
  if(this.props.projects){
      projectItems = this.props.projects.map(project => {
         //console.log(project)
         return <ProjectItem key={project.title} project={project}/>
      })
  }
   return (
      <div className="Projects">
        <h3>Latest projects</h3>
        {projectItems}
    </div>
    );
  }
}

export default Projects;