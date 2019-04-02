import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoItem from './todos/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todos/components/NewTodoItem'
import About from './about/About'
import {updateCompleted, getTodos, deleteTodo, createTodo, renameTodo} from './todos/api'


class App extends Component {

  state = {
    todos: []
  }

  onGetTodos() {
     getTodos()
     .then(res => {
       return res.json()
     })
     .then(data => {
       this.setState({todos: data})
     })
  }

  componentDidMount() {
    this.onGetTodos()
  }

  onUpdateCompleted = (id,item) => {
    updateCompleted(id,item)
    .then(response => response.json())
    .then(res=> {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo._id === id) {
          todo.completed = res.completed
        }
        return todo;
      }) });
    })
  }

  onDeleteTodo = (id) => {
    deleteTodo(id)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)] }));
  }

   onCreateTodo = (name) => {
     if (name) {
       createTodo(name)
      .then(res => res.json())
      .then(data => {
        this.setState({ todos: [...this.state.todos, data] })
      })
     }
  }

  onEditTodo = (id,newName) => {
    renameTodo(id, newName)
  }

  render() {
    const todosComponent = this.state.todos.map(item => <TodoItem  key={item._id} item={item} onUpdateCompleted={this.onUpdateCompleted} onDeleteTodo={this.onDeleteTodo} onEditTodo={this.onEditTodo}/>)
    return (
      <Router basename='/on-track'>
            <NavBar/>
            <div className='container'>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <NewTodoItem onCreateTodo={this.onCreateTodo}/>
                  <div className='todo-list'>
                  {todosComponent}
                  </div>
                </React.Fragment>
              )}/>
              <Route path='/about' component={About}/>
          </div>
      </Router>
    );
  }
}

export default App;
