import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
// import TodoItem from './todos/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todos/components/NewTodoItem'
import About from './about/About'
// import {updateCompleted, getTodos, deleteTodo, createTodo, renameTodo} from './todos/api'
import Todos from './todos/components/Todos'
import Home from './home/Home'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      flashMessage: '',
      flashType: null,
    }
  }

  setTodos = todos => {
    this.setState(todos)
  }

  flash = (message, type) => {
    this.setState({flashMessage: message, flashType: type})
    clearTimeout(this.messageTimeout)
    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null}),2000)
  }

  render() {
    const {flashMessage, flashType, todos} = this.state
    return (
      <Router>
            <NavBar/>
            <div className='container'>
              {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
                <Route exact path='/' render={() => (
                  <Home/>
                )}/>
                <Route exact path='/Todos' render={props => (
                  <React.Fragment>
                    <NewTodoItem setTodos={this.setTodos} todos={todos}/>
                    <div className='todo-list'>
                    <Todos
                    flash={this.flash}
                    setTodos={this.setTodos}
                    todos={todos}
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
