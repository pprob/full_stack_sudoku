const defaultState = {
  userScores: [],
  nameFilter: undefined
}


export default (state = defaultState, action) => {
  switch(action.type) {
    case 'SET_PLAYER_SCORES':
      return {
        ...state,
        userScores: [...action.scores]
      }
    case 'SET_PLAYER_FILTER':
      return {
        ...state,
        nameFilter: action.playerName
      }
    default: 
      return state
  }
}