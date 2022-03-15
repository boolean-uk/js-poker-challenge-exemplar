# Poker Challenge

Welcome to the Poker challenge!

## Learning Objectives
- Build a simple program using classes, functions, loops, and flow control
- Use `git` & GitHub to commit work and open a Pull Request

## Instructions

1. Fork this repository and then:
```sh
$ git clone [your repo] && cd js-poker-challenge
$ npm install # installs dependencies listed in package.json
```
2. Run the tests from your project root directory. There should be a lot of failures to begin with. You can run your test suite in a few ways:
```sh
$ npm test # run the full test suite
$ npm test-main # run only the tests for the main exercise
$ npm test-extension1 # run only the tests for extension 1
$ npm test-extension2 # run only the tests for extension 2
```
3. In GitHub, [open a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository to the challenge repository.
4. Implement the criteria below locally and [push your code](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to your repository! Every push to a branch that has an open Pull Request will update it automatically with your changes.
5. Check the status of the automated tests on the Pull Request - update your implementation if needed.

# Main Task

Given two pairs of cards, calculate the winning pair.

## Acceptance Criteria

```js
let poker = new Poker()
poker.winningPair(['Q', '6'], ['J', 'K']) // => []

let poker = new Poker()
poker.winningPair(['9', '9'], ['7', '7']) // => ['9', '9']

let poker = new Poker()
poker.winningPair(['K', '3'], ['K', 'K']) // => ['K', 'K']
```

## Extended Acceptance Criteria

For the extended criteria, you may need to look up functions and techniques you have not used before. Pay special attention to the available Array functions as detailed in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Array of Pairs

Your class should contain a method capable of accepting an array of arrays, each of which contain a pair of cards, and calculating the winning pair from that. For example, the function should be able to take in `[['A', 'A'], ['3', '7'], ['K', 'K']]` and return `['A', 'A']`.

This is known as a two dimensional array. There is no limit to the amount of arrays contained within the array.

**Example**
```js
let poker = new Poker()
poker.winningPairFromArray([['K', '5'], ['3', '7']]) // => []

let poker = new Poker()
poker.winningPairFromArray([['K', 'K'], ['A', 'A']]) // => ['A', 'A']

let poker = new Poker()
poker.winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']]) // => ['7', '7']
```

### Three of a Kind

Similar to the above, your class should contain a method capable of calculating the winning hand from an array that can contain both pairs *and* three of a kind. Each hand may contain either two or three cards.

**Example**
```js
let poker = new Poker()
poker.winning3CardHand([['K', '5'], ['3', '7'], ['K', 'J', '4']]) // => []

let poker = new Poker()
poker.winning3CardHand([['5', '5', '3'], ['7', '7', '7']]) // => ['7', '7', '7']

let poker = new Poker()
poker.winning3CardHand([['J', 'J'], ['9', '9'], ['6', '6', '4']]) // => ['J', 'J']
```

### Concise Code
Split up your methods in to multiple smaller methods that do one thing only. Read this [article on Clean Functions](https://github.com/ryanmcdermott/clean-code-javascript#functions) and apply the principles you think are relevant.