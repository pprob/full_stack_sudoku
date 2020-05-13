const defaultState = {
  email: '',
  username: '',
  password: '',
  error: ''
}


export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email
      }
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username
      }
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password
      }
    default: 
      return state
  }
}