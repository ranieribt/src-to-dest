'use strict'

var render = require('../lib/render')

var fixtures = {
  template: '<title>${title}</title><meta name="description" content="${description}"><body>${contents}</body>',
  page: '<h1>${title}</h1><p>${pageSpecific}</p>',
  data: {
    title: 'Fixture Template',
    description: 'Template test data',
    pageSpecific: 'Page specific test data'
  },
  expected: '<title>Fixture Template</title><meta name="description" content="Template test data"><body><h1>Fixture Template</h1><p>Page specific test data</p></body>'
}

describe('render()', () => {
  test('render a full HTML page', () => {
    var result = render(fixtures.template, fixtures.page, fixtures.data)
    expect(result).toBe(fixtures.expected)
  })
})
