import React, { Component } from 'react'

class AddProject extends Component {
    constructor(){
        super()
        this.state = {
            newProject: {

            }
        }
    }
    static defaultProps = {
        categories: ['Web Design', 'Mobile Development']
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.refs.title.value === ''){
            alert("Title is required")
        }else {
          this.setState({newProject:{
              title: this.refs.title.value,
              category: this.refs.category.value
          }}, function(){
              //console.log(this.state)
              this.props.AddProject(this.state.newProject)
          })  
        }
    }
    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return(
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">
                        {categoryOptions}</select>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
        
    }
}

export default AddProject