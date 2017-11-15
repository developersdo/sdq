'use strict'

/**
 * Module dependencies
 * @private
 */

import isCedula from './validators/is-cedula'
import isRnc from './validators/is-rnc'

/**
 * SDQ object.
 */

const SDQ = {
  isCedula,
  isRnc
}

/**
 * Module export.
 * @public
 */

export default SDQ
