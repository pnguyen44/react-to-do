import React, { Component } from 'react'

class NewTodoItem extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onCreateTodo(this.state.name)
    // clear state
    this.setState({name: ''})
  }
  render() {
    return (
      <div>
        <form style={{display: 'flex'}} onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            required
            value={this.state.name}
            style={{flex: '36', padding: '10px'}}
            placeholder='Add item'
            onChange={this.handleChange}
          />

          <input
            type='submit'
            value='add_circle'
            className='btn material-icons'
            style={{flex:'1'}}
          />
        </form>
      </div>
    )
  }

}

export default NewTodoItem