import React, {Component} from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {
  render(){
    return this.props.todos.map((item) => (
      <TodoItem key={item.id} item={item}/>
    ));

  }
}

export default Todos
