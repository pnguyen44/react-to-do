import React, { Component } from 'react'
import {createTodo} from '../api'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: '50px 10rem 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 1rem 0px',
    },
  },
  nameInput: {
    border: '1px solid black',
    flex: '36',
    padding: '10px'
  },
  form: {
    display: 'flex',
    marginBottom: 20
  }
});


class NewTodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      todos: []
    }
  }

  static getDerivedStateFromProps(props, state){
     if(props.todos!==state.todos){
       return { todos: props.todos};
    }
    else return null;
  }

  handleChange = (e) => {
    const {name,value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.onCreateTodo(this.state.name)
    // clear state
    this.setState({name: ''})
  }

  onCreateTodo = (name) => {
    if (name) {
      createTodo(name)
     .then(res => res.json())
     .then(data => {
       this.props.setTodos({ todos: [...this.state.todos, data]})
     })
    }
 }

  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            required
            value={this.state.name}
            className={classes.nameInput}
            placeholder='Add item'
            onChange={this.handleChange}
          />

          <input
            type='submit'
            value='add_circle'
            className='btn material-icons'
            style={{flex:'1'}}
          />
        </form>
      </div>
    )
  }
}

NewTodoItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTodoItem);
