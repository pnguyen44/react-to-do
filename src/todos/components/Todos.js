import React , {Component} from 'react'
// import {getTodos, updateCompleted, deleteTodo, createTodo, renameTodo} from '../api'
import TodoItem from './TodoItem'

class Todos extends Component {
  render() {
    const {flash,todos,onUpdateCompleted, onRenameTodo, onDeleteTodo} = this.props
    const todosComponent = todos.map(item => <TodoItem  key={item._id} item={item} flash={flash} onUpdateCompleted={onUpdateCompleted} onDeleteTodo={onDeleteTodo} onRenameTodo={onRenameTodo}/>)

    return (
      <React.Fragment>
      {todosComponent}
      </React.Fragment>
    )
  }
}

export default Todos
