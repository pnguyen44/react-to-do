import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
// import todosData from './todosData'
import Todos from './todo/Todos'
import Header from './header/Header'
import NewTodoItem from './todo/components/NewTodoItem'
import About from './about/About'
import apiUrl from './apiConfig'
import axios from 'axios'


class App extends Component {
  state = {
    todos: []
  }

componentDidMount() {
  // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
  fetch(apiUrl + '/items')
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({todos: data})
    })
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
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)] }));
}

newTodoItem = (name) => {
  // const todoItem = {
  //   // id: 10099,
  //   name: name,
  //   completed: false,
  // }

  // console.log(name)
  // const url = 'https://jsonplaceholder.typicode.com/todos'
  // return axios(url,todoItem)
  //     .then(res => this.setState({todos: [...this.state.todos,res.data]}))
  // const init = {
  //   method: 'POST',
  //   // headers: {
  //   //   'Content-Type': 'application/json',
  //   // },
  //   body: JSON.stringify(todoItem)
  // }
  // fetch(apiUrl + '/items', init)
  //   .then(res => {
  //     console.log('...', res)
  //     this.setState({todos: [...this.state.todos,res.data]})
  //   })

  axios.post(apiUrl + '/items', {
    name,
    completed: false
  })
  .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
