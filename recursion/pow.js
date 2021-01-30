const powIterative = function(n,e) {
    let result = 1;
    let isNegative = e < 0;
    e = isNegative ? -e : e;
    for(let i = 0; i < e; i += 1) {
        result *= n;
    }
    return isNegative ? 1 / result : result;
};

const pow = function(n,e) {
    const powAux = (n, e, acum) => e < 1 ? 
                                            acum:
                                            powAux(n, e - 1, n * acum);
    return e >= 0 ? powAux(n,e,1) : 1 / powAux(n, -e, 1);
} 

if(module && !module.parent) {
    console.log(
        powIterative(2,3),
        pow(2,3),
        powIterative(2,-2),
        pow(2,-2)
    );
}

module.exports = {
    pow
};