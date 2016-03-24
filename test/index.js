'use strict'

QUnit.module('Props sort plugin', {
  setup: function () {
    jss.use(jssPropsSort.default())
  },
  teardown: function () {
    jss.plugins.registry = []
  }
})

test('sort props by length', function () {
  var ss = jss.createStyleSheet({
    a: {
      'border-left': '1px',
      'border': '3px'
    }
  }, {named: false})
  ok(ss.rules.a)
  equal(ss.toString(), 'a {\n  border: 3px;\n  border-left: 1px;\n}')
})
