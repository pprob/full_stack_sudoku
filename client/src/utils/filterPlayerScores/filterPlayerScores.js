export default (playerScores, nameFilter) => {
  if (!nameFilter) {
    return playerScores
  }
  const filteredScores = playerScores.filter((scores) => scores.userName.includes(nameFilter))
  return filteredScores
}