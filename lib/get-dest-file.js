'use strict'

var path = require('path')

module.exports = function getDestFile (file) {
  // TODO what about index.md | *.md
  const INDEX_HTML = 'index.html'

  if (file.endsWith(INDEX_HTML)) {
    return file
  }

  var fExt = path.extname(file)
  var fName = path.basename(file, fExt)

  return `${fName}/index${fExt}`
}
