import React , {Component} from 'react'
import {getTodos, updateCompleted, deleteTodo, createTodo, renameTodo} from '../api'
import TodoItem from './TodoItem'

class Todos extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     todos: []
  //   }
  // }

  // onGetTodos() {
  //    getTodos()
  //    .then(res => {
  //      return res.json()
  //    })
  //    .then(data => {
  //      this.setState({todos: data})
  //    })
  // }
  //
  // componentDidMount() {
  //   this.onGetTodos()
  // }
  //
  // onUpdateCompleted = (id,item) => {
  //   updateCompleted(id,item)
  //   .then(response => response.json())
  //   .then(res=> {
  //     this.setState({ todos: this.state.todos.map(todo => {
  //       if(todo._id === id) {
  //         todo.completed = res.completed
  //       }
  //       return todo;
  //     }) });
  //   })
  // }
  //
  // onDeleteTodo = (id) => {
  //   deleteTodo(id)
  //   .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)] }));
  // }
  //
  // onRenameTodo = (id,newName) => {
  //   if(newName) {
  //     renameTodo(id, newName)
  //   } else {
  //     return this.flash('Name Required', 'flash-error')
  //   }
  // }

   // todosComponent = this.props.todos.map(item => <TodoItem  key={item._id} item={item} onUpdateCompleted={this.props.onUpdateCompleted} onDeleteTodo={this.props.onDeleteTodo} onRenameTodo={this.props.onRenameTodo}/>)

  render() {
    const {todos} = this.props
    console.log('--todos', todos)
    // const {setTodo, todo} = this.props
    console.log('todos', todos)
    const todosComponent = todos.map(item => <TodoItem  key={item._id} item={item} onUpdateCompleted={this.props.onUpdateCompleted} onDeleteTodo={this.props.onDeleteTodo} onRenameTodo={this.props.onRenameTodo}/>)

    return (
      <React.Fragment>
      {todosComponent}
      </React.Fragment>
    )
  }
}

export default Todos
