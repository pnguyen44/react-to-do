import React, { Component } from 'react';
import './App.css';
import todosData from './todosData'
import Todos from './components/Todos'


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

  render() {
    // console.log(todosData)
    return (
      <div className='todo-list'>
        <Todos
          todos={this.state.todos}
          toogleComplete={this.toogleComplete}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

export default App;
