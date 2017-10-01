'use strict'

var interpolate = require('./interpolate')

// var log = console.log

/**
 * Wraps specific page contents in a full HTML template page.
 * @param {string} template - full HTML page template
 * @param {string} page     - specific page contents
 * @param {object} data     - key/value replacement data
 */
module.exports = function render (template, page, data) {
  // assuming template has a ${contents} key...
  data.contents = interpolate(page, data)
  return interpolate(template, data)
}
