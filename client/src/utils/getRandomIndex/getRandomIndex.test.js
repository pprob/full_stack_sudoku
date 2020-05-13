import getRandomIndex from './getRandomIndex';


describe('getRandomIndex', () => {
  it('should return a number between 0 and 8', () => {
    const randomIndex = getRandomIndex()
    expect(randomIndex).toBeGreaterThanOrEqual(0)
    expect(randomIndex).toBeLessThanOrEqual(8)
  })
})