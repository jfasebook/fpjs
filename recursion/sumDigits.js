function sumdigits(n) {
    const auxSumDigits = (n, a) => n < 10 ? 
                                        a + n : 
                                        auxSumDigits(Math.floor(n / 10), n % 10 + a);

    return auxSumDigits(n,0);

}

if(module && !module.parent) {
    console.log(
        sumdigits(5),
        sumdigits(25),
        sumdigits(125)
    )
}

module.exports = sumdigits;