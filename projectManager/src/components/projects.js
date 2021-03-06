import React, { Component } from 'react';
import ProjectItem from './project-item'

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id)
  }
  render() {
    let projectItems
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
         //console.log(project)
         return <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
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
Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;