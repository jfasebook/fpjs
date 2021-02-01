const {insertV} = require('./insertV');

function sortV(v) {
    const sortVAux = (v, a, p) => p > v.length - 1 ?
                                    a:
                                    sortVAux(v, insertV(a, v[p]), p + 1);
    return sortVAux(v, [], 0);
};

if(module && !module.parent) {
    console.log(
        sortV ([1, 3, 2, 4, 8, 1]), // [ 1, 1, 2, 3, 4, 8 ]
        sortV ([2, 4, 6, 8, 3, 0]), // [ 0, 2, 3, 4, 6, 8 ]
        sortV ([1, 2, 3, 4, 5, 6]), // [ 1, 2, 3, 4, 5, 6 ] 
        sortV ([6, 5, 4, 3, 2, 1]),  // [ 1, 2, 3, 4, 5, 6 ]
        sortV([]), // []
        sortV([1])
    )
}

module.exports = {
    sortV
}