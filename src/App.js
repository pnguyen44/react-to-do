import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import TodoItem from './todos/components/TodoItem'
import NavBar from './navBar/NavBar'
import NewTodoItem from './todos/components/NewTodoItem'
import About from './about/About'
import apiUrl from './apiConfig'
import {updateCompleted, getTodos, deleteTodo} from './todos/api'


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

onUpdateCompleted= (id,item) => {
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

onDeleteTodo = (id) => {
  deleteTodo(id)
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

  render() {

    const todosComponent = this.state.todos.map(item => <TodoItem  key={item._id} item={item} onUpdateCompleted={this.onUpdateCompleted} onDeleteTodo={this.onDeleteTodo}/>)

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
