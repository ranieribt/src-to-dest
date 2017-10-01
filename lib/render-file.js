'use strict'

var render = require('./render')
var io = require('./io')

// var log = console.log

/**
 * Wraps specific page contents in a full HTML template file.
 * @param {string} templateFile - path to the template file
 * @param {string} inputFile    - path to the page file
 * @param {object} data         - key/value replacement data
 * @param {function} cb         - callback
 */
module.exports = function renderFile (templateFile, inputFile, data, cb) {
  io.readFile(templateFile, template => {
    io.readFile(inputFile, page => {
      var rendered = render(template, page, data)
      cb(rendered)
    })
  })
}
