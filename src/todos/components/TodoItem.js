import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ContentEditable from "react-contenteditable";

class TodoItem extends Component {
  constructor(props) {
  super(props);
    this.state = {
      editable: true,
      hideUpdateBtn: true,
      name: this.props.item.name,
      id: null
    };
  }


  handleClick = (id) => {
    console.log('..this.d', id)
    this.setState({id: id})
    this.toogleEditable()
  }

  handleChange = (e) => {
    this.setState({name: e.target.value})
  }

  toogleEditable = () => {
    this.setState({editable: !this.state.editable})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('...id', this.state.id)
    this.toogleEditable()
    this.props.onEditTodo(this.state.id, this.state.name)
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
        <button
        style={btnStyle}
        className="material-icons"
        onClick={this.props.onDeleteTodo.bind(this,_id)}>
          delete
        </button>

        {this.state.editable ?
          <button
          style={btnStyle}
          className="material-icons editable"
          onClick={this.handleClick.bind(this,_id)}> edit
          </button>
        :
          <form onSubmit={this.handleSubmit}>
            <button
            type='submit'
            style={btnStyle}
            className="material-icons editable"> done
            </button>
            </form>
        }

        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.onUpdateCompleted.bind(this,_id,this.props.item)}
        />{"    "}
        <ContentEditable
            html={this.state.name} // innerHTML of the editable div
            disabled={this.state.editable} // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
            tagName='span'
            style={this.state.editable ? null : styles.editable }
        />
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
