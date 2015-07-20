## Make rule props extend each other instead of override.

Inspired by react native. Using this plugin more specific properties will not be overwritten by less specific.

```javascript
export default {
    button: {
        borderLeft: '1px solid red',
        border: '3px solid green'
    }
}
```

```css
.jss-0 {
    border: 3px solid green;
    border-left: 1px solid red;
}
```

Take a look at [examples](http://jsstyles.github.io/jss-props-sort/examples/index.html) directory.


## Register plugin

```javascript
var jss = require('jss')
var propsSort = require('jss-props-sort')
jss.use(propsSort)
```

## Run tests

### Locally
```bash
npm i
open test/local.html
```
### From github

[Tests](https://jsstyles.github.com/jss-props-sort/test)

## License

MIT
