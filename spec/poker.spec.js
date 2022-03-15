Poker = require('../src/poker')
let poker;

describe('Poker', () => {
  it("should return ['A', 'A'] for ['K', '3'] and ['A', 'A']", () => {
    poker = new Poker()

    const result = poker.winningPair(['K', '3'], ['A', 'A'])

    expect(result).toEqual(['A', 'A'])
  })

  it("should return [] for ['J', 'Q'] and ['3', '7']", () => {
    poker = new Poker()

    const result = poker.winningPair(['J', 'Q'], ['3', '7'])

    expect(result).toEqual([])
  })

  it("should return ['9', '9'] for ['9', '9'] and ['7', '7']", () => {
    poker = new Poker()

    const result = poker.winningPair(['9', '9'], ['7', '7'])

    expect(result).toEqual(['9', '9'])
  })
})