/*
  The Fibonacci numbers, commonly denoted F(n) form a sequence,
  called the Fibonacci sequence, such that each number is the
  sum of the two preceding ones, starting from 0 and 1

  Below is the iterative two-pointer solution

  Time complexity: 0(n)
  Space complexity: 0(1)
*/
export default function compute(n: number) {
  if (n === 0) return 0
  if (n === 1) return 1
  if (n === 2) return 1
  
  let current = 0
  let prevOneBack = 1
  let prevTwoBack = 1
  
  for (let i = 3; i <= n; i++) {
      current = prevOneBack + prevTwoBack
      prevTwoBack = prevOneBack
      prevOneBack = current
  }
  
  return current
}
