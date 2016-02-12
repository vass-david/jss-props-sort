/**
 * Sort props by length.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length > prop1.length
  }

  return rule => {
    const {style} = rule
    if (!style) return
    const newStyle = {}
    const props = Object.keys(style).sort(sort)
    for (const prop in props) {
      newStyle[props[prop]] = style[props[prop]]
    }
    rule.style = newStyle
  }
}

