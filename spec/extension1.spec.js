Poker = require('../src/poker')
let poker;

describe('Poker', () => {
  it("should return ['A', 'A'] for [['K', 'K'], ['A', 'A']]", () => {
    poker = new Poker()

    const result = poker.winningPairFromArray([['K', 'K'], ['A', 'A']])

    expect(result).toEqual(['A', 'A'])
  })

  it("should return ['7', '7'] for [['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']]", () => {
    poker = new Poker()

    const result = poker.winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']])

    expect(result).toEqual(['7', '7'])
  })

  it("should return [] for [['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']]", () => {
    poker = new Poker()

    const result = poker.winningPairFromArray([['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']])

    expect(result).toEqual([])
  })
})