// setFeedback true/false
export const setFeedback = (value) => {
  return {
    type: 'SET_FEEDBACK',
    value
  }
}
// set difficulty
export const setDifficulty = (value) => ({
  type: 'SET_DIFFICULTY',
  value
})