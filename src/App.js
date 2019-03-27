import React, { Component } from 'react';
import './App.css';
import todosData from './todosData'
import Todos from './components/Todos'


class App extends Component {
  state = {
    todos: todosData
  }

handleChange = (id) => {
  this.setState({ todos: this.state.todos.map(item => {
    if(item.id === id) {
      item.completed = !item.completed
    }
    return item
  }) })
}

  render() {
    // console.log(todosData)
    return (
      <div className='App'>
        <Todos todos={this.state.todos} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
