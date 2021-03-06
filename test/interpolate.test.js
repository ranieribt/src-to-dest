'use strict'

var interpolate = require('../lib/interpolate')

describe('interpolate()', () => {

  test('return original string if key is not found', () => {
    var res = interpolate('the ${colr} is sky', {color: 'blue'})
    expect(res).toBe('the ${colr} is sky')
  })

  test('replace a single occurrence of a key', () => {
    var res = interpolate('the ${color} is sky', {color: 'blue'})
    expect(res).toBe('the blue is sky')
  })

  test('replace all occurrences of a key', () => {
    var res = interpolate('the ${color} is sky is ${color}', {color: 'blue'})
    expect(res).toBe('the blue is sky is blue')
  })

  test('replace the occurrences of different keys', () => {
    var data = {color: 'blue', thing: 'sky'}
    var res = interpolate('the ${color} is ${thing}', data)
    expect(res).toBe('the blue is sky')
  })

  test('replace all occurrences of different keys', () => {
    var data = {color: 'blue', thing: 'sky'}
    var res = interpolate('the ${color} is ${thing} the ${thing} is ${color}', data)
    expect(res).toBe('the blue is sky the sky is blue')
  })

})
