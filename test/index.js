'use strict'

var jss = window.jss.default

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

test('leave non-regular rules unchanged', function () {
  var ss = jss.createStyleSheet({
    '@font-face': {
      'font-family': 'MyHelvetica',
      src: 'local("Helvetica")'
    }
  })
  equal(ss.toString(), '@font-face {\n  font-family: MyHelvetica;\n  src: local("Helvetica");\n}')

  ss = jss.createStyleSheet({
    '@media print': {
      button: {
        'border-left': '1px',
        'border': '3px'
      }
    }
  })
  equal(ss.toString(), '@media print {\n  .button-3184422840 {\n    border: 3px;\n    border-left: 1px;\n  }\n}')

  ss = jss.createStyleSheet({
    '@keyframes id': {
      from: {top: 0},
      '30%': {top: 30},
      '60%, 70%': {top: 80}
    }
  })
  equal(ss.toString(), '@keyframes id {\n  from {\n    top: 0;\n  }\n  30% {\n    top: 30;\n  }\n  60%, 70% {\n    top: 80;\n  }\n}')
})
