'use strict'

// var fs = require('fs')
var path = require('path')

var src
var dest
var templateFile
var srcFile
var destFile
var log = console.log

module.exports = {create}

function create (cwd) {
  src = `${cwd}/src`
  // log(src)
  dest = `${cwd}/build`
  // log(dest)
  templateFile = `${src}/template.html`
  // log(templateFile)

  return {
    build
  }
}

function build (file) {
  // srcFile = `${src}/public/${file}`
  // log(srcFile)
  
  // `index.html` -> index.html
  // `about.html` -> about/index.html
  destFile = _destFile(file)
  log(destFile)
}

function _destFile(file) {
  // TODO what about index.md
  const INDEX_HTML = 'index.html'

  if (file.endsWith(INDEX_HTML)) {
    return file
  }

  var fExt = path.extname(file)
  var fName = path.basename(file, fExt)

  return `${fName}/${INDEX_HTML}`
}

// function srcToDest (templateFile, inputFile) {
//   readFile(templateFile, template => {
//     readFile(inputFile, input => {
//       console.log(template)
//       console.log('---')
//       console.log(input)
//     })
//   })
// }

// function readFile (file, cb) {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) throw err

//     cb(data)
//   })
// }

// function writeFile (file, data, cb) {
//   fs.writeFile(file, data, 'utf8', err => {
//     if (err) throw err

//     cb(file)
//   })
// }
