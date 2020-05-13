
const defaultState = {
  difficulty: 5,
  feedback: true
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.value
      }
    case 'SET_FEEDBACK':
      return {
        ...state,
        feedback: action.value
      }
    default: 
      return state
  }
}