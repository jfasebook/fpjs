const {reverse, reverseV} = require('./reverse');
const mirror = (n, m) => reverse(n) === m;

function equalsV(v, w) {
    const equalsVAux = (v, w, a, p) => !a || p > v.length - 1 ? 
                                                a :
                                                equalsVAux(v,w, v[p] === w[p], p + 1);
    return v.length === w.length && equalsVAux(v,w, v[0] === w[0], 1);
}

function mirrorV(v, w) {
    return v.length === w.length && equalsV(v, reverseV(w));
}

function mirrorVDirectly(v, w) {
    const mirrorVDirectlyAux = (v,w,a,p, q) => !a || p === q ?
                                                a :
                                                mirrorVDirectlyAux(v, w, v[p] === w[q], p + 1, q - 1)
    return v.length === w.length && mirrorVDirectlyAux(v, w, true, 0, v.length - 1);
};

if(module && !module.parent) {
    console.log(
        mirror (1, 7),          // false
        mirror (0, 0),          // true
        mirror (123, 321),      // true
        mirror (123, 123),      // false
        mirror (123, 132),      // false
    );

    console.log(
        equalsV([1,2,3], [1,2,3]), // true
        equalsV([1,2,3], [0,2,3]), //false
        equalsV([1,2,3], [1,2]), // false
        equalsV([1,2,3], [1,2,5]), // false
        equalsV([1,2], [1,2,4]) // false
    );

    console.log (
        mirrorVDirectly ([2, 4, 6], []),            // false
        mirrorVDirectly ([2, 4, 6], [2, 4, 6]),     // false
        mirrorVDirectly ([2, 4, 6], [6, 4]),        // false
        mirrorVDirectly ([2, 4, 6], [6, 4, 2]),     // true
        mirrorVDirectly ([2, 4, 6], [6, 4, 2, 7]),   // false
        mirrorVDirectly ([2, 4, 6], [6, 4, 2])   // true
    );
}

module.exports = {mirror, mirrorV};