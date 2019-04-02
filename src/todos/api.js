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

export const getItems= () => {
  return fetch(apiUrl + '/items', {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
