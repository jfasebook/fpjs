const {hasVFrom} = require('./hasV');

const repeatV = function(v) {
    const repeatVAux = (v,a,i) => a || i > v.length - 1 ?
                                                    a :
                                                    repeatVAux(v, hasVFrom(v, v[i], i + 1), i + 1 )
    return repeatVAux(v, false, 0);
}

if(module && !module.parent) {
    console.log (
        repeatV ([1,2,3,4,5]),   // false
        repeatV ([1,2,3,4,5,3]),  // true
        repeatV ([1,2,3,4,5,1])  // true
    );
}

module.exports = repeatV;