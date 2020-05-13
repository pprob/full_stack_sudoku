export default ({ grid, col, number }) => {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === number) {
      return true;
    }
  }
  return false;
};