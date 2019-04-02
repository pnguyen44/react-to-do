import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoItem from './todos/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todos/components/NewTodoItem'
import About from './about/About'
import apiUrl from './apiConfig'
// import axios from 'axios'
import {updateCompleted, getItems} from './todos/api'


class App extends Component {
  state = {
    todos: []
  }

  onGetItems() {
     getItems()
     .then(res => {
       return res.json()
     })
     .then(data => {
       this.setState({todos: data})
     })
  }

componentDidMount() {
  this.onGetItems()
}

toogleComplete = (id,item) => {
  updateCompleted(id,item)
  .then(response => response.json())
  .then(res=> {
    console.log('Success:', res)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo._id === id) {
        todo.completed = res.completed
      }
      return todo;
    }) });
  })
}

removeItem = (id) => {
  fetch(apiUrl + '/items/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo._id !== id)] }));
}

 newTodoItem = (name) => {
   if (name) {
     (async() => await fetch(apiUrl + '/items/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        completed: false
      })
    }))()
    .then(res => res.json())
    .then(data => {
      this.setState({ todos: [...this.state.todos, data] })
    })
   }
}


 // newTodoItem = (name) => {
 //   axios.post(apiUrl + '/items', {
 //     name,
 //     completed: false
 //   })
 //   .then(res => {
 //     this.setState({ todos: [...this.state.todos, res.data] })
 //    })
 // }

  render() {

    const todosComponent = this.state.todos.map(item => <TodoItem  key={item._id} item={item} toogleComplete={this.toogleComplete} removeItem={this.removeItem}/>)

    return (
      <Router basename='/on-track'>
            <NavBar/>
            <div className='container'>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <NewTodoItem newTodoItem={this.newTodoItem}/>
                  {todosComponent}
                </React.Fragment>
              )}/>
              <Route path='/about' component={About}/>
          </div>
      </Router>
    );
  }
}

export default App;
