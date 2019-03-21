import React, {Component} from 'react'
import todosData from './data/todosData'
import TodoItem from './components/TodoItem'

class App extends Component {
  render() {
    const todoItemComponents = todosData.map(item => <TodoItem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        {todoItemComponents}
      </div>
    )
  }
}

export default App
