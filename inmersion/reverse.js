const reverse = function(n) {
    const reverseAux = (n, acum) => n < 10 ? 
                                            acum * 10 + n % 10:
                                            reverseAux(Math.floor(n / 10), acum * 10 + n % 10);
    return reverseAux(n >= 0 ? n : -n, 0) * (n >= 0 ? 1 : -1);
}

if(module && !module.parent) {
    console.log(
        reverse(1),
        reverse(123),
        reverse(-125),
        reverse(125)
    );
}

module.exports = reverse;