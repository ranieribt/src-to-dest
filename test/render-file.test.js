'use strict'

var path = require('path')
var renderFile = require('../lib/render-file')

var cwd = `${__dirname}/fixtures/render-file`
var src = `${cwd}/src`

// TODO DRY this fixtures
var fixtures = {
  templateFile: `${src}/template.html`,
  inputFile: `${src}/public/page.html`,
  data: {
    title: 'Fixture Template',
    description: 'Template test data',
    pageSpecific: 'Page specific test data'
  }
}

describe('renderFile()', () => {

  test('render a full HTML page from input template and page file', done => {
    renderFile(fixtures.templateFile, fixtures.inputFile, fixtures.data, result => {
      expect(result).toMatch(/<title>Fixture Template<\/title>/)
      expect(result).toMatch(/<meta name="description" content="Template test data">/)
      expect(result).toMatch(/<body><h1>Fixture Template<\/h1>/)
      expect(result).toMatch(/<p>Page specific test data<\/p><\/body>/)
      done()
    })
  })

})