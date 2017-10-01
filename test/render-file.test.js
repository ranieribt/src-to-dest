'use strict'

var renderFile = require('../lib/render-file')

// fixtures
var {
  templateFile,
  srcFile,
  data
} = require('./fixtures/render-file/test-data')

describe('renderFile()', () => {

  test('render a full HTML page from input template and page file', done => {
    var cb = rendered => {
      expect(rendered).toMatch(/<title>Fixture Template<\/title>/)
      expect(rendered).toMatch(/<meta name="description" content="Template test data">/)
      expect(rendered).toMatch(/<body><h1>Fixture Template<\/h1>/)
      expect(rendered).toMatch(/<p>Page specific test data<\/p><\/body>/)
      done()
    }

    renderFile(templateFile, srcFile, data, cb)
  })

})