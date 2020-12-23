var aes = require('kc-aes256');
var tmspan = require('kc-timespan');

var tokenize = {};

// Tokenize data
tokenize.encode = function(key, exp, data) {
    var k = key;
    var t = tmspan(exp);
    var d = {};
    d.data = data;
    d.tmsp = t;
    d.expr = exp;
    d = JSON.stringify(d);
    d = aes.encrypt(k, d);
    return d;
}

// Detokenize data
tokenize.decode = function(key, tkn) {
    var k = key;
    var d = tkn;
    try {
        d = aes.decrypt(k, d);
        d = JSON.parse(d);
        var t = tmspan(d.expr);
        if (d.tmsp == t) {
        d = d.data; } else {d = null;}
    } catch(err){ d = null; }
    return d || null;
}

// Export
module.exports = tokenize;
