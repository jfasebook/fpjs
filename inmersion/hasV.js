const hasVFrom = (v, e, i) => v[i] === e || i > v.length - 1 ?
                                                    v[i] === e:
                                                    hasVFrom(v, e, i + 1);
const hasV = function(v, e) {
    return hasVFrom(v, e, 0);
}



if(module && !module.parent) {
    console.log(
        hasV ([1,2,3,4,5], 4), // true
        hasV ([1,2,3,4,5], 6),  // false
        hasV ([1,2,3,4,5], 1),  // true
        hasV ([1,2,3,4,5], 5),  // true
    )
}

module.exports = {
    hasV,
    hasVFrom
};
