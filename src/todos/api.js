import apiUrl from '../apiConfig'


export const updateCompleted = (id,item) => {
  return fetch(apiUrl + '/items/' + id, {
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
  return fetch(apiUrl + '/items', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}

export const deleteTodo  = (id) => {
  return  fetch(apiUrl + '/items/' + id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            }
          })
}

export const createTodo = name => {
  return fetch(apiUrl + '/items/', {
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
  return fetch(apiUrl + '/items/' + id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName
    })
  })
}
