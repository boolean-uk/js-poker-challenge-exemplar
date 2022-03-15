const pointMap = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

class Poker {
  // Write your implementation here

  winningPair (hand1, hand2) {
    const hand1IsPair = hand1.every(card => card === hand1[0])
    const hand2IsPair = hand2.every(card => card === hand2[0])

    if (!hand1IsPair && hand2IsPair) {
      return hand2
    }

    if (!hand2IsPair && hand1IsPair) {
      return hand1
    }

    if (!hand2IsPair && !hand1IsPair) {
      return []
    }

    const hand1Score = hand1.reduce((a, b) => a + pointMap[b], 0)
    const hand2Score = hand2.reduce((a, b) => a + pointMap[b], 0)

    return hand1Score > hand2Score ? hand1 : hand2
  }

  winningPairFromArray (hands) {
    let result = []

    for (let i = 0; i < hands.length; i++) {
      const hand = hands[i]

      const isPair = hand.every(card => card === hand[0])

      if (isPair) {
        const handScore = hand.reduce((a, b) => a + pointMap[b], 0)
        const existingWinningHandScore = result.reduce((a, b) => a + pointMap[b], 0)

        if (handScore > existingWinningHandScore) {
          result = hand
        }
      }
    }

    return result
  }

  // this would warrant a refactor after figuring out the logic but hey, it works
  winning3CardHand (hands) {
    let result = []

    for (let i = 0; i < hands.length; i++) {
      const hand = hands[i]

      const isOfAKind = hand.every(card => card === hand[0])

      if (isOfAKind) {
        if (hand.length > result.length) { // previous winning hand was a pair, this one is 3 of a kind so it out right wins
          result = hand
          continue
        }

        const handScore = hand.reduce((a, b) => a + pointMap[b], 0)
        const existingWinningHandScore = result.reduce((a, b) => a + pointMap[b], 0)

        if (handScore > existingWinningHandScore) {
          result = hand
          continue
        }
      }

      const pairedCards = hand.filter((card, index) => hand.indexOf(card) !== index)

      if (pairedCards.length === 1) { // there can be only one duplicate to indicate a pair, any more and it's 3 of a kind
        const pair = hand.filter(card => card === pairedCards[0])
        const handScore = pair.reduce((a, b) => a + pointMap[b], 0)
        const existingWinningHandScore = result.reduce((a, b) => a + pointMap[b], 0)

        if (handScore > existingWinningHandScore) {
          result = pair
        }
      }
    }

    return result
  }
}

module.exports = Poker
