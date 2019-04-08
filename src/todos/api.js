import apiUrl from '../apiConfig'


export const updateCompleted = (id,item) => {
  return fetch(apiUrl + '/todos/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      completed: !item.completed
    })
  })
}

export const getTodos = () => {
  return fetch(apiUrl + '/todos', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const getTodo = (id) => {
  return fetch(apiUrl + '/todos/' + id, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const deleteTodo  = (id) => {
  return  fetch(apiUrl + '/todos/' + id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          })
}

export const createTodo = name => {
  return fetch(apiUrl + '/todos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      completed: false
    })
  })
}

export const renameTodo = (id, newName) => {
  return fetch(apiUrl + '/todos/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName
    })
  })
}
