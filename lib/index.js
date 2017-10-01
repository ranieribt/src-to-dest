// 'use strict'

// var fs = require('fs')

// function init (cwd, t) {

// }

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

// exports.srcToDest = srcToDest

/*
build(templateFile, srcDir, destDir, data, cb)
	buildFile(templateFile, srcFile, destFile, data, cb)
		renderFile(templateFile, inputFile, data, cb)
      render(templateContents, pageContents, data)
*/