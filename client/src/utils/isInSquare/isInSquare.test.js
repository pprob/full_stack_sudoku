import isInSquare from './isInSquare'

describe('isInSquare', () => {
  it('returns true when value is in correct 3x3 square', () => {
    const square = [
      [1, 5, 9],
      [8, 2, 7],
      [6, 3, 4]
    ]
    expect(isInSquare({ square, number: 1})).toBeTruthy()
    expect(isInSquare({ square, number: 5})).toBeTruthy()
    expect(isInSquare({ square, number: 9})).toBeTruthy()
  })
  it('returns false when number does not exist in correct 3v3 square', () => {
    const square = [
      [0, 5, 9],
      [8, 2, 7],
      [6, 0, 4]
    ]
    expect(isInSquare({ square, number: 1})).toBeFalsy()
    expect(isInSquare({ square, number: 3})).toBeFalsy()
  })
})