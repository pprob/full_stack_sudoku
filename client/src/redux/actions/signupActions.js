

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