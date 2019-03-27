import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import todosData from './todosData'
import Todos from './todo/Todos'
import Header from './header/Header'
import NewTodoItem from './todo/components/NewTodoItem'
import About from './about/About'



class App extends Component {
  state = {
    todos: todosData
  }

toogleComplete = (id) => {
  this.setState({ todos: this.state.todos.map(item => {
    if(item.id === id) {
      item.completed = !item.completed
    }
    return item
  }) })
}

removeItem = (id) => {
  console.log(id)
  this.setState({todos: [...this.state.todos].filter(item => item.id !== id)})
}

newTodoItem = (name) => {
  console.log(name)
  const newTodoItem = {
    id: 211,
    name,
    completed: false
  }
  this.setState({todos: [...this.state.todos,newTodoItem]})
}

  render() {
    // console.log(todosData)
    return (
      <Router>
        <div className='todo-list'>
          <div className='container'>
            <Header/>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <NewTodoItem newTodoItem={this.newTodoItem}/>
                    <Todos
                      todos={this.state.todos}
                      toogleComplete={this.toogleComplete}
                      removeItem={this.removeItem}
                    />
                </React.Fragment>
              )}/>
              <Route path='/about' component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
