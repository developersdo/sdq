'use strict'

/**
 * Module dependencies.
 * @private
 */

import luhn from 'luhn-alg'
import exceptions from './exception-cedula-list'

/**
 * Module export.
 * @public
 */

export default isCedula

/**
 * Validate a given input to be a valid cédula de identidad electoral.
 * @param {String} input The input to validate.
 */

function isCedula(input) {
  // The input must be a string.
  if (typeof input !== 'string') {
    return false
  }

  // Remove any character but digits.
  input = input.replace(/[^\d]/g, '')

  // The input must contains 11 digits.
  if (input.length !== 11) {
    return false
  }

  // If the input is a match of one in the exception list, then it is valid.
  if (exceptions.indexOf(input) > -1) {
    return true
  }

  return luhn(input)
}
