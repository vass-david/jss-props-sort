/**
 * Sort props by length.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssPropsSort(rule) {
  const style = rule.style

  if (!style) return

  const newStyle = {}
  const props = Object.keys(style).sort(sort)
  for (let i = 0; i < props.length; i++) {
    newStyle[props[i]] = style[props[i]]
  }

  rule.style = newStyle
}

function sort(prop0, prop1) {
  return prop0.length > prop1.length
}
