'use strict'

var pattern = /\$\{([\s\S]+?)\}/g

exports.interpolate = function interpolate(tplStr, data) {
  return tplStr.replace(pattern, (match, key) => data[key] || `\$\{${key}\}`)
}
