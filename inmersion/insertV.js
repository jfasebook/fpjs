function insertV(v, e) {
    const insertVAux = (v, e, a, p) => p > v.length  ?
                                        a:
                                        insertVAux(v, v[p] <= e ? e : v[p], v[p] <= e ?  a.concat(v[p]) : a.concat(e), p + 1);
    return v.length ? insertVAux(v, e, [], 0) : [e];
}

if(module && !module.parent) {
    console.log(
        insertV([], 1),
        insertV([1], 2),
        insertV([2, 4, 6], 3),
        insertV([2, 3, 4, 6], 3),
        insertV([2, 3, 4, 6], 7),
    );
}

module.exports = {
    insertV
}