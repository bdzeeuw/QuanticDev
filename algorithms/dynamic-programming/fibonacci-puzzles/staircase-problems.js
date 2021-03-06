const assert = require('assert')

/**
 * Given a number of stairs, you can climb at most m stairs at a time.
 * For instance, for m=3, you can climb 1, 2, or 3 stairs at a time.
 * Count the number of different ways that you can reach the top.
 *
 * @param stairCount - No of stairs to climb.
 * @param m - Max no of stairs you can climb at a time.
 * @returns {number} - Number of different ways to reach the top.
 */

// worst solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsRecursive (stairCount, m) {}

// acceptable solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsRecursiveMemoized (stairCount, m) {}

// best solution with:
//   Time complexity: O()
//   Space complexity: O()
//   Call Stack: O()
function climbStairsFibonacci (stairCount, m) {
  // validate input
  assert(stairCount >= 0, 'Cannot have negative stairs.')
  assert(m > 0, 'Max no of stairs you can climb at a time must be greater than 0.')

  // first two fibonacci-like numbers are always 0 and 1 so just return them as is
  if (stairCount <= 1) return stairCount

  // if you can only take 1 step at a time, no matter how high the stairs, there is only 1 way to climb it
  if (m === 1) return 1

  // fibonacci-like numbers sequence where each number is the sum of m numbers before it
  // first 2 fibonacci numbers are 0 and 1 so we start with those
  const fib = [0, 1]

  // calculate next fibonacci-like number and push it to the end of the array
  for (let i = 0; i < stairCount; i++) {
    // sum previous m numbers
    fib.push(fib.reduce((total, n) => total + n))

    // we only need to know last m numbers so remove any extras
    if (fib.length > m) fib.shift()
  }

  return fib.pop()
}

/**
 * very similar climbStairs except possibleSteps = [1, 2, 4, 7]
 * this can still be solved using fibonacci-like sequences instead of recursion,
 * but we need to calculate all of [1, 2, 3, 4, 5, 6, 7] since upper steps can depend on any of them
 * @param stairCount
 * @param possibleSteps
 */
function climbStairsWithVariableSteps (stairCount, possibleSteps) {}

/**
 * Tests
 */

// test case #0
const stairs0 = 0
const m0 = 2
const solution0 = 0

const calculatedSolution0 = climbStairsFibonacci(stairs0, m0)
const calculatedSolution0_recursive = climbStairsRecursive(stairs0, m0)
const calculatedSolution0_recursiveMemoized = climbStairsRecursiveMemoized(stairs0, m0)

console.log(`Example Stairs #0: ${stairs0}, m: ${m0}, Solution: ${solution0}`)
assert.deepStrictEqual(calculatedSolution0, solution0)
assert.deepStrictEqual(calculatedSolution0_recursive, solution0)
assert.deepStrictEqual(calculatedSolution0_recursiveMemoized, solution0)

// test case #1
const stairs1 = 1
const m1 = 2
const solution1 = 1

const calculatedSolution1 = climbStairsFibonacci(stairs1, m1)
const calculatedSolution1_recursive = climbStairsRecursive(stairs1, m1)
const calculatedSolution1_recursiveMemoized = climbStairsRecursiveMemoized(stairs1, m1)

console.log(`Example Stairs #1: ${stairs1}, m: ${m1}, Solution: ${solution1}`)
assert.deepStrictEqual(calculatedSolution1, solution1)
assert.deepStrictEqual(calculatedSolution1_recursive, solution1)
assert.deepStrictEqual(calculatedSolution1_recursiveMemoized, solution1)

// test case #2
const stairs2 = 2
const m2 = 2
const solution2 = 2

const calculatedSolution2 = climbStairsFibonacci(stairs2, m2)
const calculatedSolution2_recursive = climbStairsRecursive(stairs2, m2)
const calculatedSolution2_recursiveMemoized = climbStairsRecursiveMemoized(stairs2, m2)

console.log(`Example Stairs #2: ${stairs2}, m: ${m2}, Solution: ${solution2}`)
assert.deepStrictEqual(calculatedSolution2, solution2)
assert.deepStrictEqual(calculatedSolution2_recursive, solution2)
assert.deepStrictEqual(calculatedSolution2_recursiveMemoized, solution2)

// test case #3
const stairs3 = 7
const m3 = 2
const solution3 = 21

const calculatedSolution3 = climbStairsFibonacci(stairs3, m3)
const calculatedSolution3_recursive = climbStairsRecursive(stairs3, m3)
const calculatedSolution3_recursiveMemoized = climbStairsRecursiveMemoized(stairs3, m3)

console.log(`Example Stairs #3: ${stairs3}, m: ${m3}, Solution: ${solution3}`)
assert.deepStrictEqual(calculatedSolution3, solution3)
assert.deepStrictEqual(calculatedSolution3_recursive, solution3)
assert.deepStrictEqual(calculatedSolution3_recursiveMemoized, solution3)

// test case #4
const stairs4 = 40
const m4 = 1
const solution4 = 1

const calculatedSolution4 = climbStairsFibonacci(stairs4, m4)
const calculatedSolution4_recursive = climbStairsRecursive(stairs4, m4)
const calculatedSolution4_recursiveMemoized = climbStairsRecursiveMemoized(stairs4, m4)

console.log(`Example Stairs #4: ${stairs4}, m: ${m4}, Solution: ${solution4}`)
assert.deepStrictEqual(calculatedSolution4, solution4)
assert.deepStrictEqual(calculatedSolution4_recursive, solution4)
assert.deepStrictEqual(calculatedSolution4_recursiveMemoized, solution4)

// test case #5
const stairs5 = 16
const m5 = 7
const solution5 = 31489

const calculatedSolution5 = climbStairsFibonacci(stairs5, m5)
const calculatedSolution5_recursive = climbStairsRecursive(stairs5, m5)
const calculatedSolution5_recursiveMemoized = climbStairsRecursiveMemoized(stairs5, m5)

console.log(`Example Stairs #5: ${stairs5}, m: ${m5}, Solution: ${solution5}`)
assert.deepStrictEqual(calculatedSolution5, solution5)
assert.deepStrictEqual(calculatedSolution5_recursive, solution5)
assert.deepStrictEqual(calculatedSolution5_recursiveMemoized, solution5)

// test case #6
const stairs6 = 30
const m6 = 30
const solution6 = 536870912

const calculatedSolution6 = climbStairsFibonacci(stairs6, m6)
const calculatedSolution6_recursive = climbStairsRecursive(stairs6, m6)
const calculatedSolution6_recursiveMemoized = climbStairsRecursiveMemoized(stairs6, m6)

console.log(`Example Stairs #6: ${stairs6}, m: ${m6}, Solution: ${solution6}`)
assert.deepStrictEqual(calculatedSolution6, solution6)
assert.deepStrictEqual(calculatedSolution6_recursive, solution6)
assert.deepStrictEqual(calculatedSolution6_recursiveMemoized, solution6)
