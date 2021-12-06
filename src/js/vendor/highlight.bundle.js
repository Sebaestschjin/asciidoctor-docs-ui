;(function () {
  'use strict'

  var hljs = require('highlight.js/lib/highlight')
  hljs.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'))
  hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
  hljs.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'))
  hljs.registerLanguage('java', require('highlight.js/lib/languages/java'))
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
  hljs.registerLanguage('json', require('highlight.js/lib/languages/json'))
  hljs.registerLanguage('lua', require('highlight.js/lib/languages/lua'))
  hljs.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'))
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'))
  hljs.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'))
  hljs.registerLanguage('shell', require('highlight.js/lib/languages/shell'))
  hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
  hljs.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'))
  ;[].slice.call(document.querySelectorAll('pre code.hljs')).forEach(function (node) {
    hljs.highlightBlock(node)
  })
})()
