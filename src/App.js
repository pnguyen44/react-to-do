import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoItem from './todos/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todos/components/NewTodoItem'
import About from './about/About'
import {updateCompleted, getTodos, deleteTodo, createTodo, renameTodo} from './todos/api'
import Todos from './todos/components/Todos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [],
      flashMessage: '',
      flashType: null,
    }
    this.onRenameTodo = this.onRenameTodo.bind(this)
  }


  flash = (message, type) => {
    this.setState({flashMessage: message, flashType: type})
    clearTimeout(this.messageTimeout)
    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null}),2000)
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

  onRenameTodo = (id,newName) => {
    if(newName) {
      renameTodo(id, newName)
    } else {
      return this.flash('Name Required', 'flash-error')
    }
  }

  render() {
    const {flashMessage, flashType} = this.state
    // const todosComponent = this.state.todos.map(item => <TodoItem  key={item._id} item={item} onUpdateCompleted={this.onUpdateCompleted} onDeleteTodo={this.onDeleteTodo} onRenameTodo={this.onRenameTodo}/>)
    return (
      <Router basename='/on-track'>
            <NavBar/>
            <div className='container'>
              {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <NewTodoItem onCreateTodo={this.onCreateTodo}/>
                  <div className='todo-list'>
                  <Todos
                    todos={this.state.todos}
                    onUpdateCompleted={this.onUpdateCompleted}
                    onDeleteTodo={this.onDeleteTodo}
                    onRenameTodo={this.onRenameTodo}
                  />
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
