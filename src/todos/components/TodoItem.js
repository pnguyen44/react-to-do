import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";
import {updateCompleted, deleteTodo, renameTodo} from '../api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TodoItem extends Component {
  constructor(props) {
  super(props);
    this.state = {
      editable: false ,
      name: props.item.name,
      todo: props.item,
      todos: []
    };
    this.id = this.props.item._id
  }

  static getDerivedStateFromProps(props, state){
     if(props.todos!==state.todos){
       return { todos: props.todos};
    }
    else return null;
  }

  onUpdateCompleted = (id,item) => {
    updateCompleted(id,item)
    .then(response => response.json())
    .then(res=> {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo._id === id) {
          todo.completed = res.completed
        }
        return todo;
      }) });
    })
  }

   onDeleteTodo(id){
    const updatedTodos = [...this.state.todos.filter(todo => todo._id !== id)]
    deleteTodo(id)
    .then(() => {
      this.props.setTodos({todos: updatedTodos});
    })
  }

  onRenameTodo = (id,newName) => {
    if(newName) {
      renameTodo(id, newName)
    } else {
      return this.flash('Name Required', 'flash-error')
    }
  }

  pasteAsPlainText = event => {
    event.preventDefault()

    const text = event.clipboardData.getData('text/plain')
    document.execCommand('insertHTML', false, text)
  }

  disableNewlines = event => {
    const keyCode = event.keyCode || event.which

    if (keyCode === 13) {
      event.returnValue = false
      if (event.preventDefault) event.preventDefault()
    }
  }

  handleChange = (e) => {
    // Handling ContentEditable component issue with special character
    const trimSpaces = string => {
      return string
        .replace(/&nbsp;/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/<br>/g, '')
    }
    const {value} = e.target
    let modifiedVal
    if(value) {
       modifiedVal = trimSpaces(value)
    } else {
      modifiedVal = ''
    }
    this.setState({name: modifiedVal})
  }

  toggleEditable = () => {
    this.setState({editable: !this.state.editable})
  }

  handleDoneBtnClick = () => {
    const {flash} = this.props
    if (this.state.name) {
      this.toggleEditable()
      this.onRenameTodo(this.id, this.state.name)
    } else {
      return flash('Name Required', 'flash-error')
    }

  }
  handleCancelClick = () => {
    const oldName = this.state.todo.name
    this.setState({name:oldName})
    this.toggleEditable()
  }

  render() {

    const todoStyles = {
      backgroundColor: this.state.editable ? 'lightyellow' : null,
      textDecoration: this.state.todo.completed ? 'line-through' : 'none',
    }

    const customTableStyle =  {
      backgroundColor: '#3f51b530',
      // padding: '10px',
      borderBottom: '2px white solid',
      // fontStyle: 'italic',
      // color: 'grey',
      // textDecoration: this.state.todo.completed ? 'line-through' : 'none',
      // row: {
      // '&:nth-of-type(odd)': {
      //   backgroundColor:'red',
      // },
      // }
    }


    const btnStyle = {
      background: 'rgba(0, 0, 0, 0)',
      // color: 'lightred',
      border: 'none',
      fontSize: 25,
      // padding: '0px 1px',
      // float: 'right',
      cursor: 'pointer',
      fontWeight: 900,
      justifyContent:'flex-end'
    }

    const _id = this.props.item._id
    const {editable} = this.state

    return (
      <TableRow style={customTableStyle}>
        <TableCell padding="checkbox" align='left'>
        <input
        type='checkbox'
        checked={this.props.item.completed}
        onChange={this.onUpdateCompleted.bind(this,_id,this.props.item)}
        />
        </TableCell>
        <TableCell padding="none">
        <ContentEditable
        html={this.state.name} // innerHTML of the editable div
        disabled={!this.state.editable} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
        onPaste={this.pasteAsPlainText}
        onKeyPress={this.disableNewlines}
        tagName='span'
        className='todo-item-name'
        style={todoStyles}
        />
        </TableCell>

        { !editable ?
          <React.Fragment>
            <TableCell align='right' padding='none'>
              <button
                style={btnStyle}
                className="material-icons"
                onClick={this.toggleEditable}>edit
              </button>
            </TableCell>
            <TableCell align='right' padding='none'>
              <button
              style={btnStyle}
              className="material-icons"
              onClick={this.onDeleteTodo.bind(this, this.id)}>
              delete
              </button>
            </TableCell>
          </React.Fragment>
          :
          <React.Fragment>
            <TableCell align='right' padding='none'>
              <button
              style={btnStyle}
              type='submit'
              className="material-icons"
              onClick={this.handleDoneBtnClick}>done
              </button>
            </TableCell>
            <TableCell align='right' padding='none'>
              <button
              style={btnStyle}
              className="material-icons"
              onClick={this.handleCancelClick}>cancel
              </button>
            </TableCell>
          </React.Fragment>
        }
      </TableRow>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}


export default TodoItem
