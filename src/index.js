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
    let newStyle = {}
    let props = Object.keys(style).sort(sort)
    for (let i = 0; i < props.length; i++) {
      newStyle[props[i]] = style[props[i]]
    }
    rule.style = newStyle
  }
}

