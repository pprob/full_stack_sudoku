export default (playerScores, nameFilter) => {
  if (!nameFilter) {
    console.log(playerScores)
    return playerScores
  }
  const filteredScores = playerScores.filter((scores) => scores.userName.includes(nameFilter))
  return filteredScores
}