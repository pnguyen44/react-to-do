import React, { Component } from 'react';
import './App.css';
import todosData from './todosData'
import Todos from './todo/Todos'
import Header from './header/Header'
import NewTodoItem from './todo/components/NewTodoItem'


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
      <div className='todo-list'>
        <div className='container'>
          <Header/>
            <NewTodoItem newTodoItem={this.newTodoItem}/>
              <Todos
                todos={this.state.todos}
                toogleComplete={this.toogleComplete}
                removeItem={this.removeItem}
              />
        </div>
      </div>
    );
  }
}

export default App;
