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
    this.props.newTodoItem(this.state.name)
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
            value={this.state.name}
            style={{flex: '10', padding: '5px'}}
            placeholder='Add item'
            onChange={this.handleChange}
          />

          <input
            type='submit'
            value='Add'
            className='btn'
            style={{flex:'1'}}
          />
        </form>
      </div>
    )
  }

}

export default NewTodoItem
