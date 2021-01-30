const reverse = require('./reverse');
const mirror = (n, m) => reverse(n) === m;

if(module && !module.parent) {
    console.log(
        mirror (1, 7),          // false
        mirror (0, 0),          // true
        mirror (123, 321),      // true
        mirror (123, 123),      // false
        mirror (123, 132),      // false
    )
}

module.exports = mirror;