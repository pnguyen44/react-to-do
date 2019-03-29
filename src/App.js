import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './todo/Todos'
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
  fetch('https://on-track-api.herokuapp.com' + '/items')
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({todos: data})
    })
}

toogleComplete = (id,item) => {
  console.log('iddd', id, item)
  // const item = await this.state.todos.filter(item => item._id === id)
  // console.log('....', id)

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
  //   .then(res => {
  //     console.log('...dfdsfsdata', res.json())
  //   })
  //   .then(jsonData => {
  //     console.log('..json', jsonData)
  //     this.setState({ todos: this.state.todos.map(item => {
  //       if(item.id === jsonData.data.id) {
  //         item.completed = !item.completed
  //       }
  //       return item
  //     }) })
  //   })


// working
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
  .then(res => {
    console.log('..json', res.data)
    this.setState({ todos: this.state.todos.map(item => {
      if(item.id === res.data.id) {
        item.completed = !item.completed
      }
      return item
    }) })
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
      // console.log('=== res', data)
      this.setState({ todos: [...this.state.todos, data] })
    })
}


 // newTodoItem = (name) => {
 //   axios.post(apiUrl + '/items', {
 //     name,
 //     completed: false
 //   })
 //   .then(res => {
 //     console.log('res,,,,', res)
 //     this.setState({ todos: [...this.state.todos, res.data] })
 //    })
 // }

  render() {
    return (
      <Router baseName='/on-track'>
            <NavBar/>
            <div className='container'>
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
      </Router>
    );
  }
}

export default App;
