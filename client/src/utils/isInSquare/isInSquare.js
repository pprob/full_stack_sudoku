export default ({ square, number }) => {
  return [...square[0], ...square[1], ...square[2]].includes(number);
};