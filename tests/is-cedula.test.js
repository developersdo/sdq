'use strict'

import sdq from '../src/sdq'
import validCedulas from './fixtures/valid-cedulas'
import invalidCedulas from './fixtures/invalid-cedulas'
import exceptionValidCedulas from '../src/validators/exception-cedula-list'

describe('sdq.isCedula', () => {
  it('should detect valid cedulas', () => {
    validCedulas.forEach(cedula => {
      expect(sdq.isCedula(cedula)).toBe(true)
    })
  })

  it('should detect invalid cedulas', () => {
    invalidCedulas.forEach(cedula => {
      expect(sdq.isCedula(cedula)).toBe(false)
    })
  })

  it('should detect exception valid cedulas', () => {
    exceptionValidCedulas.forEach(cedula => {
      expect(sdq.isCedula(cedula)).toBe(true)
    })
  })
})
