'use strict'

/**
 * Sort props by length.
 *
 * @param {Rule} rule
 * @api public
 */
module.exports = function (rule) {
    var style = rule.style

    if (!style) return

    var newStyle = {}
    var props = Object.keys(style).sort(sort)
    for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]]
    }

    rule.style = newStyle
}

function sort(prop0, prop1) {
    return prop0.length > prop1.length
}
