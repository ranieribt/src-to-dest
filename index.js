'use strict'

var {create} = require('./lib/builder')

var cwd = `${__dirname}/example`

var builder = create(cwd)
builder.build('index.html')
builder.build('a.html')
builder.build('ab.html')
builder.build('abc.html')

// TODO @see http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm
// TODO take a look at node-sass code organization