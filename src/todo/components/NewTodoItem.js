import React, { Component } from 'react'

class NewTodoItem extends Component {
  render() {
    return (
      <div>
        <form style={{display: 'flex'}}>
          <input t
            type='text'
            name='name'
            style={{flex: '10', padding: '5px'}}
            placeholder='Add item'
          />

          <input
            type='submit'
            value='submit'
            className='btn'
            style={{flex:'1'}}
          />
        </form>
      </div>
    )
  }

}

export default NewTodoItem
