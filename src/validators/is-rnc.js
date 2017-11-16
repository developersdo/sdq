'use strict'

/**
 * Module export.
 * @public
 */

export default isRnc

/**
 * Validate a given input to be a valid RNC.
 * @param {String} input The input to validate.
 */

function isRnc(input) {
  // The input must be a string.
  if (typeof input !== 'string') {
    return false
  }

  // Remove any character but digits.
  input = input.replace(/[^\d]/g, '')

  // The input must contains 9 digits.
  if (input.length !== 9) {
    return false
  }

  return customLuhn(input)
}

/**
 * Verify that a given input adheres to a custom luhn formula.
 * @param {String} input The input to check.
 */

function customLuhn(input) {
  // Convert string input into array of integers.
  input = input.split('').map(c => parseInt(c, 10))

  // While a luhn formula require for each second digits to be doubled,
  // this custom formula use different factors for each digits.
  const factors = [7, 9, 8, 6, 5, 4, 3, 2]

  // Sum the product of all digits by its factor.
  let sum = 0

  for (let i = factors.length - 1; i >= 0; i -= 1) {
    sum = sum + factors[i] * input[i]
  }

  const remaining = sum % 11
  let digit

  if (remaining === 0) {
    digit = 2
  } else if (remaining === 1) {
    digit = 1
  } else {
    digit = 11 - remaining
  }

  // Validar el resultado con el digito validador,
  // que en caso del RNC es el ultimo digito.
  return digit === input.pop()
}
