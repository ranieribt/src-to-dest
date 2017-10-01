'use strict'

var fs = require('fs')

const UTF8 = 'utf8'

function readFile (file, cb) {
  fs.readFile(file, UTF8, (err, data) => {
    if (err) throw err

    cb(data)
  })
}

function writeFile (file, data, cb) {
  fs.writeFile(file, data, UTF8, (err) => {
    if (err) throw err

    cb(file)
  })
}

module.exports = {
  readFile,
  writeFile
}
