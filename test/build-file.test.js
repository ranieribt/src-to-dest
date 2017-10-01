'use strict'

var fs = require('fs')
var sh = require('shelljs')
var buildFile = require('../lib/build-file')

// fixtures
var {
  templateFile,
  srcFile,
  destFile,
  data
} = require('./fixtures/render-file/test-data')

describe('buildFile()', () => {
  // afterEach(() => {
  //   sh.rm('-rf', dest)
  // })

  test('run', done => {
    var cb = _destFile => {
      expect(_destFile).toBeDefined()

      done()
    }

    buildFile(templateFile, srcFile, destFile, data, cb)
  })
})
