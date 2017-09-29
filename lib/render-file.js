'use strict'

var fs = require('fs')
var render = require('./render')

// var log = console.log

/**
 * Wraps specific page contents in a full HTML template file.
 * @param {string} templateFile - path to the template file
 * @param {string} inputFile - path to the page file
 * @param {object} data - key/value replacement data
 * @param {function} cb - callback
 */
module.exports = function renderFile (templateFile, inputFile, data, cb) {
  readFile(templateFile, template => {
    readFile(inputFile, page => {
      render(template, page, data, cb)
    })
  })
}

function readFile (file, cb) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err

    cb(data)
  })
}

/*
build(templateFile, srcDir, destDir, data, cb)
	buildFile(templateFile, srcFile, destFile, data, cb)
		renderFile(templateFile, inputFile, data, cb)
      render(templateContents, pageContents, data, cb)
*/