import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyles = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      // fontStyle: 'italic',
      // color: 'grey',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, name} = this.props.item
    return (
      <div style={this.getStyles()}>
        <p>
        <input
          type='checkbox'
          checked={this.props.item.completed}
          onChange={this.props.handleChange.bind(this,id)}
        />{"  "}
          {name}
          <button style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
}

const btnStyle = {
  background: '#f4f4f4',
  color: 'red',
  border: 'none',
  fontStyle: 'bold',
  padding: '5px 10px',
  float: 'right',
  cursor: 'pointer'
}

export default TodoItem
