'use strict'

// var fs = require('fs')
// var path = require('path')
// var sh = require('shelljs')
// var io = require('./io')
var buildFile = require('./build-file')

module.exports = function build(cwd) {

  
  renderFile(templateFile, srcFile, data, rendered => {
    var dirname = path.dirname(destFile)

    if (!fs.existsSync(dirname)) {
      sh.mkdir(dirname)
    }

    io.writeFile(destFile, rendered, cb)
  })
}
