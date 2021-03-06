'use strict'

/**
 * Replace string keys delimited with ES6 template literal with the provided
 * data.
 *
 * @param {string} str  - template string
 * @param {object} data - replacement data
 */
module.exports = function interpolate (str, data) {
  var pattern = /\$\{([\s\S]+?)\}/g
  var replacement = (match, key) => data[key] || match
  return str.replace(pattern, replacement)
}