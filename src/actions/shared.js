import API from 'goals-todos-api'

export const RECEIVED_DATA = 'RECEIVED_DATA'


function receiveData(todos, goals) {
  return {
    type: RECEIVED_DATA,
    todos,
    goals
  }
}

export function handleInitialData() {
  return dispatch => {
    Promise.all(
      [API.fetchGoals(),
        API.fetchTodos()]
    ).then(([goals, todos]) => {
      dispatch(receiveData(todos, goals))
    })
  }
}