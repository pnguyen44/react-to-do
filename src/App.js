import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoItem from './todo/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todo/components/NewTodoItem'
import About from './about/About'
import apiUrl from './apiConfig'
import axios from 'axios'


class App extends Component {
  state = {
    todos: []
  }

componentDidMount() {
  fetch(apiUrl + '/items')
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({todos: data})
    })
}

toogleComplete = (id,item) => {
  // const item = await this.state.todos.filter(item => item._id === id)

  // (async() => await fetch(apiUrl + '/items/' + id, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: item.name,
  //       completed: !item.completed
  //     })
  //   }))()
  //   .then(jsonData => {
  //     this.setState({ todos: this.state.todos.map(item => {
  //       if(item.id === jsonData.data.id) {
  //         item.completed = !item.completed
  //       }
  //       return item
  //     }) })
  //   })

  axios({
    url: apiUrl + '/items/' + id,
    method:'patch',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      completed: !item.completed
    }
  })
  .then((res)=> {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo._id === id) {
        todo.completed = res.data.completed
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
