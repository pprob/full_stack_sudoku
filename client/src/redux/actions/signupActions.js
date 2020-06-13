

export const setEmailField = (value) => {
  return {
    type: 'SET_EMAIL',
    email: value
  }
}

export const setUsernameField = (value) => {
  return {
    type: 'SET_USERNAME',
    username: value
  }
}

export const setPasswordField = (value) => {
  return {
    type: 'SET_PASSWORD',
    password: value
  }
}

export const setErrorField = (payload) => {
  return {
    type: 'SET_ERROR_FIELD',
    payload
  }
}

export const removeErrorField = () => {
  return {
    type: 'REMOVE_ERROR_FIELD',
  }
}

export const Loading = () => {
  return {
    type: 'IS_LOADING'
  }
}

export const hasLoaded = () => {
  return {
    type: 'HAS_LOADED'
  }
}