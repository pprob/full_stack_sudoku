export default ({ grid, row, number }) => {
  if (grid[row].includes(number)) {
    return true;
  }
  return false;
};