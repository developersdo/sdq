'use strict'

import sdq from '../src/sdq'
import validRncs from './fixtures/valid-rncs'
import invalidRncs from './fixtures/invalid-rncs'

describe('sdq.isRnc', () => {
  it('should detect valid rncs', () => {
    validRncs.forEach(rnc => {
      expect(sdq.isRnc(rnc)).toBe(true)
    })
  })

  it('should detect invalid rncs', () => {
    invalidRncs.forEach(rnc => {
      expect(sdq.isRnc(rnc)).toBe(false)
    })
  })
})
