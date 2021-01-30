const reverse = require('./reverse');
const palindrome = (n) => n === reverse(n);

if(module && !module.parent) {
    console.log(
        palindrome (123),       // false
        palindrome (12321),     // true
        palindrome (1221)       // true
    )
}

module.exports = palindrome;