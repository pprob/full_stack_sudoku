const defaultState = {
  email: '',
  username: '',
  password: '',
  error: undefined,
  isLoading: false
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
    case 'SET_ERROR_FIELD':
      return {
        ...state,
        error: action.payload
      }
    case 'REMOVE_ERROR_FIELD':
      return {
        ...state,
        error: undefined
      }
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'HAS_LOADED':
      return {
        ...state,
        isLoading: false
      }
    default: 
      return state
  }
}