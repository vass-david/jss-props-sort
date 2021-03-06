![JSS logo](https://avatars1.githubusercontent.com/u/9503099?v=3&s=60)

## JSS plugin that ensures style properties extend each other instead of override

Inspired by React Native. When using this plugin,
more specific properties will not be overwritten by less specific.

Make sure you read [how to use
plugins](https://github.com/cssinjs/jss/blob/master/docs/setup.md#setup-with-plugins)
in general.

[Demo](http://cssinjs.github.io/examples/index.html#plugin-jss-props-sort) -
[JSS](https://github.com/cssinjs/jss)

[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/cssinjs/lobby)


## Usage example

```javascript
import jss from 'jss'
import propsSort from 'jss-props-sort'

jss.use(propsSort())

const sheet = jss.createStyleSheet({
  container: {
    'border-left': '1px solid red',
    border: '3px solid green'
  }
})
```

```javascript
console.log(sheet.toString())
```
```css
.jss-0-0 {
  border: 3px solid green;
  border-left: 1px solid red;
}
```

```javascript
console.log(sheet.classes)
```
```javascript
{ container: "jss-0-0" }
```

## Run tests

```bash
npm i
npm run test
```

## License

MIT
