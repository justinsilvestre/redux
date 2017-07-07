let nextTodoId = 0

export const addTodoSuccess = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text
})

export const addTodo = (text) => (dispatch) =>
  fetch('/addTodo').then((response) => {
    const id = response.json().id

    dispatch(addTodoSuccess(text, id))
  })

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
