const convertNumToString = require('./convertNumToString')

describe('Convert Number to a String', () => {
  it('converts a number to a string equivalent', () => {
    expect(convertNumToString(5)).toMatch('five')
    expect(convertNumToString(10)).toMatch('ten')
  })
})