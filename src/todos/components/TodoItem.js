import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";
import {getTodo} from '../api'

class TodoItem extends Component {
  constructor(props) {
  super(props);
    this.state = {
      editable: false ,
      // hideUpdateBtn: true,
      name: props.item.name,
      todo: {}
    };
    // this.handleDoneBtnClick = this.handleDoneBtnClick.bind(this)
    this.id = this.props.item._id
  }


  // handleClick = () => {
  //   // this.setState({id: id})
  //   // const name = this.state.name
  //   // if (name) {
  //     this.toggleEditable()
  //   // }
  // }

  onGetTodo() {
     getTodo(this.id)
     .then(res => {
       return res.json()
     })
     .then(data => {
       this.setState({todo: data})
     })
  }

  componentDidMount() {
    this.onGetTodo()
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
    // Handling ContentEditable component issues
    console.log('...handleChange got here')
    const trimSpaces = string => {
      return string
        .replace(/&nbsp;/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/<br>/g, '')
    }
      console.log('e.target.value', e.target.value)
    const {value} = e.target
    let modifiedVal
    if(value) {
      console.log('valin trim ue',value)
       modifiedVal = trimSpaces(value)
       // modifiedVal = value
    } else {
      modifiedVal = ''
    }

        console.log('modVal', modifiedVal)
    this.setState({name: modifiedVal})
  }

  toggleEditable = () => {
    this.setState({editable: !this.state.editable})
  }

  handleDoneBtnClick = () => {
    const {flash} = this.props
    console.log('.state name..', this.state.name)
    if (this.state.name) {
      // console.log('...toggleEditable in done btn', this.toggleEditable)
      this.toggleEditable()
      this.props.onRenameTodo(this.id, this.state.name)
    } else {
      // this.toggleEditable()
      return flash('Name Required', 'flash-error')
    }

  }
  handleCancelClick = () => {
    const oldName = this.state.todo.name
    this.setState({name:oldName})
    // console.log('.toggleEditable in cance bytn', this.toggleEditable)
    this.toggleEditable()
  }


  getStyles = () => {
    return {
      background: '#3f51b530',
      padding: '10px',
      borderBottom: '1px white solid',
      // fontStyle: 'italic',
      // color: 'grey',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    }
  }

renderBtns = () => {
  const {editable} = this.state
  // console.log('editable', editable)

  if (!editable) {
    return (
      <React.Fragment>
        <button
        style={btnStyle}
        className="material-icons"
        onClick={this.props.onDeleteTodo.bind(this, this.id)}>
        delete
        </button>

        <button
          style={btnStyle}
          className="material-icons"
          onClick={this.toggleEditable}>edit
        </button>
      </React.Fragment>
  )
  } else {

    return (
      <React.Fragment>
      <button
      style={btnStyle}
      className="material-icons"
      onClick={this.handleCancelClick}>cancel
      </button>

      <button
      style={btnStyle}
      type='submit'
      className="material-icons"
      onClick={this.handleDoneBtnClick}>done
      </button>
      </React.Fragment>
    )
  }
}


  render() {
    const _id = this.props.item._id
    return (
      <div style={this.getStyles()}>

        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.onUpdateCompleted.bind(this,_id,this.props.item)}
        />&nbsp;&nbsp;
        <ContentEditable
            html={this.state.name} // innerHTML of the editable div
            disabled={!this.state.editable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            onPaste={this.pasteAsPlainText}
            onKeyPress={this.disableNewlines}
            tagName='span'
            className='todo-item-name'
            style={this.state.editable ? styles.editable : null }
        />
        {this.renderBtns()}
      </div>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const styles = {
  editable: {
    backgroundColor: 'lightyellow'
  },
}

const btnStyle = {
  background: 'rgba(0, 0, 0, 0)',
  // color: 'lightred',
  border: 'none',
  fontSize: 25,
  padding: '0px 1px',
  float: 'right',
  cursor: 'pointer',
  fontWeight: 900,
  justifyContent:'flex-end'
}

export default TodoItem
