# Tokenize
[nodejs] Tokenize data.

### Install
```
npm install kc-tokenize
```

### Use
```js
var tokenize = require('kc-tokenize');
var key = 'abcd';
var exp = 3600; // Expiration in seconds

var tkn = tokenize.encode(key, exp, {
    a: 'Hello'
});
console.log(tkn);

var dta = tokenize.decode(key, tkn);
console.log(dta);
```
