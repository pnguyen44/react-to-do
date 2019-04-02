import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";

class TodoItem extends Component {
  constructor(props) {
  super(props);
    this.state = {
      disableEditable: true,
      hideUpdateBtn: true,
      name: props.item.name,
      id: null
    };
  }


  handleClick = (id) => {
    this.setState({id: id})
    this.toogleEditable()
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  toogleEditable = () => {
    this.setState({disableEditable: !this.state.disableEditable})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onRenameTodo(this.state.id, this.state.name)
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

  render() {
    const _id = this.props.item._id
    return (
      <div style={this.getStyles()}>
      <form onSubmit={this.handleSubmit}>
        <button
        style={btnStyle}
        className="material-icons"
        onClick={this.props.onDeleteTodo.bind(this,_id)}>
          delete
        </button>

        <button
        style={btnStyle}
        className="material-icons"
        onClick={this.handleClick.bind(this,_id)}>
        {this.state.disableEditable ? 'edit' : 'done'}
            </button>

        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.onUpdateCompleted.bind(this,_id,this.props.item)}
        />{"    "}
        <ContentEditable
            html={this.state.name} // innerHTML of the editable div
            disabled={this.state.disableEditable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            tagName='span'
            style={this.state.disableEditable ? null : styles.editable }
        />
          </form>
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
  }
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
