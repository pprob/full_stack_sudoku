import isInRow from './isInRow'

describe('isInRow', () => {
  it('returns true when number is in grid row', () => {
    const grid = [
      [8, 4, 2, 6, 5, 1, 3, 9, 7],
      [5, 3, 7, 2, 8, 9, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [1, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 1, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 3, 1, 7, 8, 5, 6]
    ]
    expect(isInRow({ grid, row: 0, number: 9})).toBeTruthy()
    expect(isInRow({ grid, row: 4, number: 1})).toBeTruthy()
    expect(isInRow({ grid, row: 8, number: 5})).toBeTruthy()
  })
  it('returns false when number is not in grid row', () => {
    const grid = [
      [8, 4, 2, 6, 5, 1, 3, 0, 7],
      [5, 3, 7, 2, 8, 0, 6, 4, 1],
      [6, 9, 1, 7, 3, 4, 5, 2, 8],
      [0, 6, 3, 8, 4, 5, 9, 7, 2],
      [7, 5, 8, 0, 9, 2, 4, 6, 3],
      [9, 2, 4, 3, 7, 6, 1, 8, 5],
      [4, 7, 6, 5, 1, 8, 2, 3, 9],
      [2, 8, 5, 9, 6, 3, 7, 1, 4],
      [3, 1, 9, 3, 1, 7, 8, 0, 6]
    ]
    expect(isInRow({ grid, row: 0, number: 9})).toBeFalsy()
    expect(isInRow({ grid, row: 4, number: 1})).toBeFalsy()
    expect(isInRow({ grid, row: 8, number: 5})).toBeFalsy()

  })
})