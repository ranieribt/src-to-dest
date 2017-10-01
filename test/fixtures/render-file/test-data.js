'use strict'

var cwd = __dirname
var src = `${cwd}/src`
var dest = `${cwd}/build`

module.exports = {
  templateFile: `${src}/template.html`,
  srcFile: `${src}/public/page.html`,
  destFile: `${dest}/page.html`,
  data: {
    title: 'Fixture Template',
    description: 'Template test data',
    pageSpecific: 'Page specific test data'
  }
}