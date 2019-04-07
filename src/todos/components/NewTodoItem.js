import React, { Component } from 'react'
import {createTodo} from '../api'

class NewTodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      todos: []
    }
  }

  static getDerivedStateFromProps(props, state){
     if(props.todos!==state.todos){
       return { todos: props.todos};
    }
    else return null;
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.onCreateTodo(this.state.name)
    // clear state
    this.setState({name: ''})
  }

  onCreateTodo = (name) => {
    if (name) {
      createTodo(name)
     .then(res => res.json())
     .then(data => {
       this.props.setTodos({ todos: [...this.state.todos, data]})
     })
    }
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
