'use strict'

var fs = require('fs')
var path = require('path')
var sh = require('shelljs')
var io = require('./io')
var renderFile = require('./render-file')

module.exports = function buildFile(templateFile, srcFile, destFile, data, cb) {
  renderFile(templateFile, srcFile, data, rendered => {
    var dirname = path.dirname(destFile)

    if (!fs.existsSync(dirname)) {
      sh.mkdir(dirname)
    }

    io.writeFile(destFile, rendered, cb)
  })
}
