import * as actions from './index'

describe('addTodo', () => {
  it('dispatches an addTodo action', () => {
    const todoText = 'Get the milk'
    const id = 7
    global.fetch = jest.fn(() => {
      const response = { json: () => ({ id }) }
      return Promise.resolve(response)
    })
    const dispatch = jest.fn()
    const addTodoSuccess = actions.addTodoSuccess(todoText, id)

    return actions.addTodo(todoText)(dispatch).then(() => {
      expect(dispatch).toHaveBeenCalledWith(addTodoSuccess)
    })
  })
})
