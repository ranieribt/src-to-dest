'use strict'

var getDestFile = require('../lib/get-dest-file')

describe('getDestFile()', () => {

  it('should return "index.html" as is', () => {
    var destFile = getDestFile('index.html')
    expect(destFile).toBe('index.html')
  })

  it('should return "page-name.html" as "page-name/index.html"', () => {
    var destFile = getDestFile('page-name.html')
    expect(destFile).toBe('page-name/index.html')
  })

  it('should return "page-name.md" as "page-name/index.html"', () => {
    var destFile = getDestFile('page-name.md')
    expect(destFile).toBe('page-name/index.md')
  })

})