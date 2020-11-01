import { createSelector } from "reselect";

const playerScoreSelector = state => state?.playerScoresState?.userScores;

const filterPlayerScoreSelector = state => state?.playerScoresState?.nameFilter;

export const filterPlayerScoresSelector = createSelector(
  playerScoreSelector,
  filterPlayerScoreSelector,
  (playerScores, nameFilter) => playerScores?.filter((playerScore) => {
    if (!nameFilter) {
      return playerScore
    } else {
      return playerScore.userName.includes(nameFilter)
    }
  })
)