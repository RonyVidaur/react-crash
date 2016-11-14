import React, { Component } from 'react'

class AddProject extends Component {
    static defaultProps = {
        categories: ['Web Design', 'Mobile Development']
    }

    handleSubmit(e){
        e.preventDefault()
        console.log('submitted')
    }
    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value="category">{category}</option>
        })
        return(
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit}>
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