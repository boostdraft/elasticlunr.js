/*!
 * elasticlunr.utils
 * Copyright (C) @YEAR Oliver Nightingale
 */

/**
 * A namespace containing utils for the rest of the lunr library
 */
elasticlunr.utils = {}

/**
 * Print a warning message to the console.
 *
 * @param {String} message The message to be printed.
 * @memberOf Utils
 */
elasticlunr.utils.warn = (function (global) {
  return function (message) {
    if (global.console && console.warn) {
      console.warn(message)
    }
  }
})(this)
