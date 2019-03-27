import React, {Component} from 'react'
import TodoItem from './components/TodoItem'
import PropTypes from 'prop-types'

class Todos extends Component {
  render(){
    return this.props.todos.map((item) => (
      <TodoItem
        key={item.id} item={item}
        toogleComplete={this.props.toogleComplete}
        removeItem={this.props.removeItem}
      />
    ));

  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default Todos
