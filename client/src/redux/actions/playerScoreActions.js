export const setPlayerScores = (scores) => {
  return {
    type: 'SET_PLAYER_SCORES',
    scores
  }
}

export const setFilter = (playerName) => {
  return {
    type: 'SET_PLAYER_FILTER',
    playerName
  }
}
