const reverse = function(n) {
    const reverseAux = (n, acum) => n < 10 ? 
                                            acum * 10 + n % 10:
                                            reverseAux(Math.floor(n / 10), acum * 10 + n % 10);
    return reverseAux(n >= 0 ? n : -n, 0) * (n >= 0 ? 1 : -1);
}

const reverseV = function(v) {
    const reverseVAux = (v, a, p) => p > v.length - 1 ?
                                        a:
                                        reverseVAux(v, [v[p], ...a], p + 1);

    return reverseVAux(v, [], 0);
}

if(module && !module.parent) {
    console.log(
        reverse(1),
        reverse(123),
        reverse(-125),
        reverse(125)
    );

    console.log(
        reverseV([2, 4, 6]) //[6, 4, 2])
    )
}



module.exports = {
    reverse,
    reverseV
};