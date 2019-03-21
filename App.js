import React, {Component} from 'react'
import todosData from './data/todosData'
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodoItems = prevState.todos.map(item => {
        if(item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        todos: updatedTodoItems
      }
    })
  }
  render() {
    const todoItemComponents = this.state.todos.map(item => <TodoItem key={item.id} item={item}
      handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todoItemComponents}
      </div>
    )
  }
}

export default App
