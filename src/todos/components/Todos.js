import React , {Component} from 'react'
// import {getTodos, updateCompleted, deleteTodo, createTodo, renameTodo} from '../api'
import TodoItem from './TodoItem'
import {getTodos, updateCompleted, deleteTodo, renameTodo} from '../api'


class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: props.todos
    }
  }

  async onGetTodos() {
     await getTodos()
     .then(res => {
       return res.json()
     })
     .then(data => {
       this.setState({todos: data})
     })
  }

  async componentDidMount() {
    await this.onGetTodos()
   this.props.setTodos({todos: this.state.todos})
  }


componentDidUpdate(prevProps) {
  if (this.props.todos !== prevProps.todos) {
    this.setState({todos: this.props.todos})
  }
}

  render() {
    // console.log('todos rendering')
    const {flash, setTodos} = this.props
    console.log('todos props', this.props.todos)
    const {todos} = this.state
    const todosComponent = todos.map(item => {
    return <TodoItem
      key={item._id}
      item={item}
      flash={flash}
      todos={todos}
      setTodos={setTodos}
      />
    })

    return (
      <React.Fragment>
      {todosComponent}
      </React.Fragment>
    )
  }
}

export default Todos
