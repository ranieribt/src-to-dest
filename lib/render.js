'use strict'

var interpolate = require('./interpolate')

// var log = console.log

/**
 * Wraps specific page contents in a full HTML template page.
 * @param {string} template - full HTML template contents
 * @param {string} page - specific page contents
 * @param {object} data - key/value replacement data
 * @param {function} cb - callback
 */
module.exports = function render (template, page, data, cb) {
  // assuming template has a ${contents} key...
  data.contents = interpolate(page, data)
  var result = interpolate(template, data)
  process.nextTick(() => cb(result))
}
